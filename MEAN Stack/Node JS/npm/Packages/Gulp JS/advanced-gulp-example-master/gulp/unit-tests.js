import gulp from 'gulp';

const $ = require('gulp-load-plugins')();

import wiredep from 'wiredep';
import karma from 'karma';
import concat from 'concat-stream';
import _ from 'lodash';

export default options => {
  function listFiles(callback) {
    const wiredepOptions = _.extend({}, options.wiredep, {
      dependencies: true,
      devDependencies: true
    });
    const bowerDeps = wiredep(wiredepOptions);

    const specFiles = [
      `${options.src}/**/*.spec.js`,
      `${options.src}/**/*.mock.js`
    ];

    const htmlFiles = [
      `${options.src}/**/*.html`
    ];

    const srcFiles = [
      `${options.tmp}/serve/app/**/*.js`
    ].concat(specFiles.map(file => `!${file}`));


    gulp.src(srcFiles)
      .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort'))
      .pipe(concat(files => {
        callback(bowerDeps.js
          .concat(_.pluck(files, 'path'))
          .concat(htmlFiles)
          .concat(specFiles));
      }));
  }

  function runTests (singleRun, done) {
    listFiles(files => {
      karma.server.start({
        configFile: `${__dirname}/../karma.conf.js`,
        files,
        singleRun,
        autoWatch: !singleRun
      }, done);
    });
  }

  gulp.task('test', ['scripts'], done => {
    runTests(true, done);
  });
  gulp.task('test:auto', ['watch'], done => {
    runTests(false, done);
  });
};
