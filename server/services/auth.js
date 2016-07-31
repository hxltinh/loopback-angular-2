/*
 * @Service: Authentication
 * handle authenticate actions
 *
 * @return: instance of Auth class
 */
'use strict';

class Auth {
  login(email, password, ttl) {
    const User = server.models.user;

    User.login({
      email,
      password,
      ttl
    }, 'user', (err, token) => {
      if (err) {
        return res.status(401).json({'error': 'login fail'});
      }
      return res.json({
        userId: token.userId,
        email,
        'token': token.id
      });
    });
  }
}

module.exports = new Auth();
