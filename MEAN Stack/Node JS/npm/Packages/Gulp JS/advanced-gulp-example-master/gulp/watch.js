import gulp from 'gulp';
import browserSync from 'browser-sync';

function isOnlyChange(event) {
  return event.type === 'changed';
}

export default options => {
  gulp.task('watch', ['markups', 'inject'], () => {

    gulp.watch([`${options.src}/*.html`, 'bower.json'], ['inject']);

    gulp.watch([
      `${options.src}/app/**/*.css`,
      `${options.src}/app/**/*.scss`
    ], event => {
      if(isOnlyChange(event)) {
        gulp.start('styles');
      } else {
        gulp.start('inject');
      }
    });

    gulp.watch([
      `${options.src}/app/**/*.js`,
      `${options.src}/app/**/*.coffee`
    ], event => {
      if(isOnlyChange(event)) {
        gulp.start('scripts');
      } else {
        gulp.start('inject');
      }
    });

    gulp.watch(`${options.src}/app/**/*.jade`, ['markups']);

    gulp.watch(`${options.src}/app/**/*.html`, event => {
      browserSync.reload(event.path);
    });
  });
};
