const vinylPaths = require('vinyl-paths');
const del = require('del');

const webpack = require('webpack');
const webpackProd = require('../webpack/production');

module.exports = (gulp, prodCb) => {
  // === +++ Start Production gulp config +++ ===
  // clear all file in prod foler
  gulp.task('clean-prod', done => {
    gulp.src('prod/*').pipe(vinylPaths(del))
      .on('finish', () => done());
  });

  // copy all file/folder from front-end/lib to prod/lib foler
  gulp.task('copy-prod-lib', done => {
    gulp.src(['front-end/lib/**/*']).pipe(gulp.dest('prod/lib'))
      .on('finish', () => done());
  });

  // copy all file/folder from front-end/lib to prod/lib foler
  gulp.task('copy-prod-images', done => {
    gulp.src(['front-end/images/**/*']).pipe(gulp.dest('prod/images'))
      .on('finish', () => done());
  });

  // copy template prod foler
  gulp.task('copy-prod-template', done => {
    gulp.src(['template/*']).pipe(gulp.dest('prod'))
      .on('finish', () => done());
  });

  gulp.task('prodTranspile', (done) => {
    const prodConf = webpackProd();
    webpack(prodConf.config, (err, stat) => {
      if (err) throw new gutil.PluginError('webpack', err);
      return done();
    });
  });

  // build app for production
  gulp.task('production',
    gulp.series('clean-prod', 'copy-prod-template',
      'copy-prod-lib', 'copy-prod-images', 'prodTranspile'));
};
