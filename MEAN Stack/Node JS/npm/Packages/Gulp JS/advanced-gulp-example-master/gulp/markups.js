import gulp from 'gulp';
import browserSync from 'browser-sync';

const $ = require('gulp-load-plugins')();

export default options => {
  gulp.task('markups', () => {
    function renameToHtml(path) {
      path.extname = '.html';
    }

    return gulp.src(`${options.src}/app/**/*.jade`)
      .pipe($.consolidate('jade', { basedir: options.src, doctype: 'html', pretty: '  ' })).on('error', options.errorHandler('Jade'))
      .pipe($.rename(renameToHtml))
      .pipe(gulp.dest(`${options.tmp}/serve/app/`))
      .pipe(browserSync.reload({ stream: true }));
  });
};
