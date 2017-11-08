'use strict';

var url = require('url');


var Directory = require('./DirectoryService');


module.exports.rCreateDir = function rCreateDir (req, res, next) {
  Directory.rCreateDir(req.swagger.params, res, next);
};

module.exports.rDeleteDir = function rDeleteDir (req, res, next) {
  Directory.rDeleteDir(req.swagger.params, res, next);
};

module.exports.rupdataDir = function rupdataDir (req, res, next) {
  Directory.rupdataDir(req.swagger.params, res, next);
};
