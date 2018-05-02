import gulp from 'gulp';
import browserSync from 'browser-sync';

const $ = require('gulp-load-plugins')();

export default options => {
  gulp.task('scripts', () => gulp.src(`${options.src}/app/**/*.coffee`)
    .pipe($.sourcemaps.init())
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter())
    .pipe($.coffee()).on('error', options.errorHandler('CoffeeScript'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(`${options.tmp}/serve/app`))
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size()));
};
