const loopback = require('loopback');
const boot = require('loopback-boot');
const chalk = require('chalk');
var bodyParser = require('body-parser');

const app = module.exports = loopback();

// app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.start = function() {

  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');

    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log(chalk.red('------------------ START LOG: BACK END ------------------'));
      console.log(chalk.cyan.bgBlack.bold('Web server listening at: %s'), baseUrl);
      console.log(chalk.green.bgBlack.bold('Browse your REST API at %s%s'), baseUrl, explorerPath);
      console.log(chalk.red('------------------- END LOG: BACK END -------------------'));
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
