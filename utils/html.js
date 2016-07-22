var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

module.exports = function() {
  console.log('build/html');
  return gulp.src('_src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true,
      removeComments: true,
    }))
    .pipe(gulp.dest('./'));
};
