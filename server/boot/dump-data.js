module.exports = app => {
  const User = app.models.user;

  const Role = app.models.Role;
  const RoleMapping = app.models.RoleMapping;

  const defaultUser = {
    'email': 'admin@blog.com',
    'password': '123456',
    'emailVerified': true,
    'sex': 'male',
    'quote': 'I am superman'
  };

  findAdmin(defaultUser.email)
    .then(user => {
      console.log('user:', user);
    });

  function findAdmin(email) {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { email }}, (err, user) => {
        if (err) { return reject(err); }
        return resolve(user);
      });
    });
  }

};
