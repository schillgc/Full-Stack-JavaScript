import gulp from 'gulp';

const $ = require('gulp-load-plugins')();

import {stream as wiredep} from 'wiredep';

export default options => {
  gulp.task('inject', ['scripts', 'styles'], () => {
    const injectStyles = gulp.src([
      `${options.tmp}/serve/app/**/*.css`,
      `!${options.tmp}/serve/app/vendor.css`
    ], { read: false });

    const injectScripts = gulp.src([
      `{${options.src},${options.tmp}/serve}/app/**/*.js`,
      `!${options.src}/app/**/*.spec.js`,
      `!${options.src}/app/**/*.mock.js`
    ])
    .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort'));

    const injectOptions = {
      ignorePath: [options.src, `${options.tmp}/serve`],
      addRootSlash: false
    };

    return gulp.src(`${options.src}/*.html`)
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(options.wiredep))
      .pipe(gulp.dest(`${options.tmp}/serve`));

  });
};
