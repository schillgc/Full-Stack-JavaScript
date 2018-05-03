import gulp from 'gulp';
import gutil from 'gulp-util';
import wrench from 'wrench';

const options = {
  src: 'src',
  dist: 'production',
  tmp: '.tmp',
  e2e: 'e2e',
  errorHandler(title) {
    return function(err) {
      gutil.log(gutil.colors.red(`[${title}]`), err.toString());
      this.emit('end');
    };
  },
  wiredep: {
    directory: 'bower_components',
    exclude: [/bootstrap-sass-official\/.*\.js/, /bootstrap\.css/]
  }
};

wrench.readdirSyncRecursive('./gulp').filter(file => (/\.(js|coffee)$/i).test(file)).map(file => {
  require(`./gulp/${file}`)(options);
});

gulp.task('default', ['clean'], () => {
    gulp.start('build');
});
