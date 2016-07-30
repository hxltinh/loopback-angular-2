'use strict';

class DumpData {
  constructor(app, config) {
    this.app = app;
    this.config = config;
  }

  findAdmin() {
    const User = this.app.models.user;
    const {email} = this.config.defaultUser;

    return new Promise((resolve, reject) => {
      User.findOne({where: {email}}, (err, user) => {
        if (err) { return reject(err); }
        return resolve(user);
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
};

module.exports = DumpData;
