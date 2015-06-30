/**
 * Utils for Gulp
 */

'use strict';

var fs = require('fs');
var config = require('./config');
var stripJsonComments = require('strip-json-comments');

exports.getRev = function () {
  return fs.readFileSync(config.paths.root + '/rev').toString().trim();
};

exports.getEnv = function () {
  return fs.readFileSync(config.paths.root + '/env').toString().trim();
};

/**
 * Read JSON file stripping the comments out
 */
exports.readJson = function (path) {
  var text = fs.readFileSync(path).toString();
  text = stripJsonComments(text);
  return JSON.parse(text);
};

exports.escapeShellArg = function (cmd) {
  return '\'' + cmd.replace(/\'/g, "'\\''") + '\'';
};
