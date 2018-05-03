import gulp from 'gulp';
import browserSync from 'browser-sync';
import browserSyncSpa from 'browser-sync-spa';
import util from 'util';
import middleware from './proxy';

export default options => {

  function browserSyncInit(baseDir, browser='default') {
    let routes = null;
    if(baseDir === options.src || (util.isArray(baseDir) && baseDir.includes(options.src))) {
      routes = {
        '/bower_components': 'bower_components'
      };
    }

    const server = {
      baseDir,
      routes
    };

    if(middleware.length > 0) {
      server.middleware = middleware;
    }

    browserSync.instance = browserSync.init({
      startPath: '/',
      server,
      browser
    });
  }

  browserSync.use(browserSyncSpa({
    selector: '[ng-app]'// Only needed for angular apps
  }));

  gulp.task('serve', ['watch'], () => {
    browserSyncInit([`${options.tmp}/serve`, options.src]);
  });

  gulp.task('serve:dist', ['build'], () => {
    browserSyncInit(options.dist);
  });

  gulp.task('serve:e2e', ['inject'], () => {
    browserSyncInit([`${options.tmp}/serve`, options.src], []);
  });

  gulp.task('serve:e2e-dist', ['build'], () => {
    browserSyncInit(options.dist, []);
  });
};
