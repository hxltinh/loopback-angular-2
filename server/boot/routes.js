"use strict";
const authConfig = require('../config/auth');

module.exports = server => {

  var router = server.loopback.Router();
  router
    .post('/api/login',(req, res) => {
      const { username, password } = req.body;
      
    });
  server.use(router);

}
