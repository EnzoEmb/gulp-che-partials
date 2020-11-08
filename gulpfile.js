
/**
 * Dependencias
 */
const gulp = require('gulp');
const htmlElements = require('./index.js');


gulp.task('partials', function () {
  return gulp.src(['test/*.html'])
    .pipe(htmlElements({
      test: 'hola'
    }))
    .pipe(gulp.dest('test/build'));
});


