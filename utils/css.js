var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
module.exports = function() {
  console.log('build/css');
  return gulp.src('_src/styles/*.css')
      .pipe(cleanCSS({
      }))
      .pipe(gulp.dest('styles/'));
};
