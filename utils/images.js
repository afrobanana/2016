var gulp = require('gulp');
var gulpSharp = require('gulp-sharp');

module.exports = function() {
  console.log('build/images');
  gulp.src( '_src/images/**/*.+(jpeg|jpg|png|tiff|webp)' )
    .pipe(gulpSharp({
      resize : [375, null],
      crop: 'center',
      max : true,
      quality : 60,
      progressive : true
    }))
    .pipe(gulp.dest('images/thumbs'));

  // gulp.src( '_src/images/**/*.+(jpeg|jpg|png|tiff|webp)' )
  gulp.src('_src/images/site/map.png' )
    .pipe(gulpSharp({
      resize : [900, null],
      crop: 'center',
      max : true,
      quality : 60,
      progressive : true
    }))
    .pipe(gulp.dest('images/medium/site'));


  gulp.src( '_src/images/**/*.+(jpeg|jpg|png|tiff|webp)' )
    .pipe(gulpSharp({
      resize: [1300, null],
      max : true,
      quality : 80,
      progressive : true
    }))
    .pipe(gulp.dest('images/large'));
};
