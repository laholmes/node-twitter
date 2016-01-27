const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
    gulp.src('index.js');
  // place code for your default task here
});

gulp.task('compile', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});