const gulp = require('gulp');
const babel = require('gulp-babel');
const jscs = require('gulp-jscs');
const jshint = require('gulp-jshint');

gulp.task('compile', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('jscs', () => {
    return gulp.src('src/**/*.js')
        .pipe(jscs())
        .pipe(jscs.reporter());
});

gulp.task('jshint', () => {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter());
});