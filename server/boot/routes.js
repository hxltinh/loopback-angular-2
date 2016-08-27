/*
 * @Route: System routes
 * handle all requests
 * @reponse: json object
 */
const authConfig = require('../config/auth');
const AuthService = require('../services/auth');

module.exports = server => {
  const authServ = new AuthService(server);
  const router = server.loopback.Router();

  router
    .post('/api/login', (req, res) => {
      const {email, password} = req.body;
      console.log('email:', email);
      console.log('password:', password);
      authServ.login(email, password, authConfig.ttl)
        .then(token => {          
          return res.json({
            userId: token.userId,
            token: token.id,
            email,
          });
        })
        .catch(err => {
          console.log('err:', err);
          res.status(401).json({'error': 'login fail'});
        });
    });

  server.use(router);
};
