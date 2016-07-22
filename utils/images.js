var gulp = require('gulp');
var gulpSharp = require('gulp-sharp');

gulp.src( '_src/images/**/*.+(jpeg|jpg|png|tiff|webp)' )
  .pipe(gulpSharp({
    resize : [375, null],
    crop: 'center',
    max : true,
    quality : 60,
    progressive : true
  }))
  .pipe(gulp.dest('images/thumbs'));

gulp.src( '_src/images/**/*.+(jpeg|jpg|png|tiff|webp)' )
  .pipe(gulpSharp({
    resize : [900, null],
    crop: 'center',
    max : true,
    quality : 60,
    progressive : true
  }))
  .pipe(gulp.dest('images/medium'));


gulp.src( '_src/images/**/*.+(jpeg|jpg|png|tiff|webp)' )
  .pipe(gulpSharp({
    resize: [],
    max : true,
    quality : 80,
    progressive : true
  }))
  .pipe(gulp.dest('images/large'));

