const _ = require('lodash');
const async = require('async');
const modelArr = require('../../config/dump-models/user');

module.exports = function(app) {
  return new Promise((resolve, reject) => {
    const Role = app.models.Role;
    const RoleMapping = app.models.RoleMapping;
    const User = app.models.user;
    // execute dump model user here
    const userFuncMap = _.map(modelArr, (item) => {
      return function(callback) {
        createUser(User, item)
          .then(user => createRole(Role, RoleMapping, user, 'user', user.id))
          .then(result => callback(null, result));
      };
    });
    async.parallel(userFuncMap, (err, result) => {
      if (err) { return reject(err); }

      return resolve(result);
    });
  });
};

function createUser(User, userInfo) {
  return new Promise((resolve, reject) => {
    User.create(userInfo, (err, user) => {
      if (err) { return reject(err); }

      resolve(user);
    });
  });
}

function createRole(Role, RoleMapping, user, name, principalId) {
  return new Promise((resolve, reject) => {
    Role.create({name}, (err, role) => {
      if (err) { return reject(err); }
      role.principals.create(
        {principalType: RoleMapping.USER, principalId},
        (err, principal) => {
          if (err) { return reject(err); }

          return resolve({
            principal,
            user,
          });
        });
    });
  });
}
