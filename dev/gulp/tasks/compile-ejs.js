/**
 * Compile EJS files
 * build, environment variabkles are available in templates
 **/

'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var config = require('../config');
var utils = require('../utils');

gulp.task('compile-ejs', function() {
  // compile templates
  return gulp.src([config.paths.client + '/ejs/**/*.ejs', '!**/_*.ejs'])
    .pipe(plugins.ejs({
      build: utils.getBuild(),
      environment: utils.getEnv()
    }))
    .pipe(gulp.dest(config.paths.client_build))

    // reload browser
    .pipe(browserSync.reload({stream: true}));
});