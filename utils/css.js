var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.src('_src/styles/*.css')
    .pipe(cleanCSS({
    }))
    .pipe(gulp.dest('styles/'));
