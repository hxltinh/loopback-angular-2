/*
 * @Service: dump data
 * handle dump data actions
 *
 * @return: object of DumpData class
 */
class DumpData {
  constructor(app, config) {
    this.app = app;
    this.config = config;
    this.modelsArr = ['user', 'Role', 'ACL', 'RoleMapping', 'AccessToken'];
  }

  // findAdmin() {
  //   const User = this.app.models.user;
  //   const {email} = this.config.defaultUser;
  //   return new Promise((resolve, reject) => {
  //     User.findOne({where: {email}}, (err, user) => {
  //       if (err) { return reject(err); }
  //       return resolve(user);
  //     });
  //   });
  // }

  executeMigrate() {
    return new Promise((resolve, reject) => {
      const ds = this.app.datasources.postgres;
      ds.automigrate(this.modelsArr, err => {
        if (err) { return reject(err); }

        // this.createAdmin().then(admin => {
        //   this.createRole('user', admin.id).then(result => resolve(result));
        // });
      });
    });
  }

  createAdmin() {
    const User = this.app.models.user;
    const {defaultUser} = this.config;
    return new Promise((resolve, reject) => {
      User.create(defaultUser, (err, user) => {
        if (err) { return reject(err); }

        resolve(user);
      });
    });
  }

  createRole(name, principalId) {
    const Role = this.app.models.Role;
    const RoleMapping = this.app.models.RoleMapping;

    return new Promise((resolve, reject) => {
      Role.create({name}, (err, role) => {
        if (err) { return reject(err); }
        role.principals.create(
          {principalType: RoleMapping.USER, principalId},
          (err, principal) => {
            if (err) { return reject(err); }

            return resolve(principal);
          });
      });
    });
  }
};

module.exports = DumpData;
