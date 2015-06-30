/**
 * Compile sass files w/sourcemaps
 **/

'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('compile-styles', function () {
  return gulp.src(config.paths.client + '/sass/main.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.sourcemaps.write('.' /* write as a separate file */))
    .pipe(gulp.dest(config.paths.client_build))
    .pipe(browserSync.reload({stream: true}));
});
