"use strict";

module.exports = server => {
  var router = server.loopback.Router();
  router.post('/api/login',(req, res) => {
          const { username, password } = req.body;

          console.log("username:", username);
          console.log("password:", password);
          res.json({ success: 1 });
        });
  server.use(router);
}
