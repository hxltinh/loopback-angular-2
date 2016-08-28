const dumpUserDb = require('./dump-models/user');
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


  executeMigrate() {
    return new Promise((resolve, reject) => {
      const ds = this.app.datasources.postgres;
      ds.automigrate(this.modelsArr, err => {
        if (err) { return reject(err); }

        dumpUserDb(this.app).then(result => {
          console.log('migrate data success');
          process.exit();
        })
        .catch(err => {
          console.log('migrate data fail');
          process.exit();
        });
      });
    });
  }
};

module.exports = DumpData;
