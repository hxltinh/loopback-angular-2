const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');

const webpackDev = require('../webpack/development');

module.exports = gulp => {
  gulp.task('dev', (cb) => {

    const devConf = webpackDev();
    const compiler = webpack(devConf.config);
    const wbSeverIns = new WebpackDevServer(compiler, devConf.devServerConfig);

    wbSeverIns.listen(devConf.envConfig.api.port, 'localhost', (err) => {
      if (err) { throw new gutil.PluginError('webpack-dev-server', err); }
      // Server listening
      console.log(chalk.green.bgMagenta.bold('[webpack-dev-server]', `http://localhost:${devConf.envConfig.api.port}`));
    });
    return cb();
  });

};
