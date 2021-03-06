const gulp = require('gulp');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const gutil = require('gulp-util');
const webpack = require('webpack');
const webpackDev = require('./pre/webpack/development');
const webpackProd = require('./pre/webpack/production');
const shell = require('gulp-shell');

const WebpackDevServer = require('webpack-dev-server');

const devTasks = require('./pre/gulp/development');
const prodTasks = require('./pre/gulp/production');

devTasks(gulp, () => {
  shell.task(['node . --color'])();
});

prodTasks(gulp, () => {
  console.log('it should be done');
});

// gulp.task('copy-lib', done => {
//   gulp.src(['src/lib/**/*']).pipe(gulp.dest('client/app/lib'));
//   done();
// });
// gulp.task('clean-client', done => {
//   gulp.src('client/app/*').pipe(vinylPaths(del));
//   done();
// });

// gulp.task('prodTranspile', (done) => {
//   const prodConf = webpackProd();
//   webpack(prodConf.config, (err, stat) => {
//     if (err) throw new gutil.PluginError('webpack', err);
//     return done();
//   });
// });

// gulp.task('production', gulp.series('clean-client', 'copy-lib', 'prodTranspile'));
