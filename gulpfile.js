'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function (){
  return gulp.src('./app/scss/app.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./app/css'))
});


gulp.task('watch', function (){
  gulp.watch('./app/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
