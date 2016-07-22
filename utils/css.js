var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function() {
  console.log('build/css');
  return gulp.src('_src/styles/*.css')
      .pipe(cleanCSS())
      .pipe(autoprefixer())
      .pipe(gulp.dest('styles/'));
};
