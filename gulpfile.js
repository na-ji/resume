var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('assets/sass/**/*.scss',['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    gulp.src(['assets/sass/main.scss', 'assets/sass/ie8.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream())
    ;
});

gulp.task('default', ['serve']);
