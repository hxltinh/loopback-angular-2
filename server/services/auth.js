/*
 * @Service: Authentication
 * handle authenticate actions
 *
 * @return: instance of Auth class
 */
class Auth {
  constructor(app) {
    this.app = app;
  }
  login(email, password, ttl) {
    const User = this.app.models.user;
    const Role = this.app.models.Role;
    return new Promise((resolve, reject) => {
      User.login({email, password, ttl}, 'user',
        (err, token) => {
          if (err) { return reject(err); }
          return resolve(token);
        });
    });
  }
}

module.exports = Auth;
