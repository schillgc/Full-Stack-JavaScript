import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import maps from 'gulp-sourcemaps';
import del from 'del';
import connect from 'gulp-connect';

gulp.task("concatScripts", () => gulp.src([
    'js/jquery.js',
    'js/sticky/jquery.sticky.js',
    'js/main.js'
    ])
.pipe(maps.init())
.pipe(concat('app.js'))
.pipe(maps.write('./'))
.pipe(gulp.dest('js')));

gulp.task("minifyScripts", ["concatScripts"], () => gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js')));

gulp.task("compileSass", () => gulp.src("scss/application.scss")
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css')));

gulp.task("watchFiles", () => {
    gulp.watch('scss/**/*.scss', ['compileSass']);
    gulp.watch('js/main.js', ['concatScripts']);
});

gulp.task("clean", () => {
    del(['dist', 'css/application.css*', 'js/app*.js*']);
});

gulp.task("build", ['minifyScripts', 'compileSass'], () => gulp.src(['css/application.css', 'js/app.min.js', 'index.html',
                 'img/**', 'fonts/**'], { base: './'} )
            .pipe(gulp.dest('dist')));

gulp.task("serve", ['watchFiles'], () => {
    connect.server({port: 3000});
});

gulp.task("default", ['clean'], () => {
    gulp.start('build');
});
