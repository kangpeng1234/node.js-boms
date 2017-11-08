'use strict';

var url = require('url');


var Project = require('./ProjectService');


module.exports.rCreateProj = function rCreateProj (req, res, next) {
  Project.rCreateProj(req.swagger.params, res, next);
};

module.exports.rDelProj = function rDelProj (req, res, next) {
  Project.rDelProj(req.swagger.params, res, next);
};

module.exports.rListProj = function rListProj (req, res, next) {
  Project.rListProj(req.swagger.params, res, next);
};

module.exports.rLoadProject = function rLoadProject (req, res, next) {
  Project.rLoadProject(req.swagger.params, res, next);
};

//项目更新走模型组接口：module.exports.rUpdateProj
module.exports.rUpdateProj = function rUpdateProj (req, res, next) {
  Project.rUpdateProj(req.swagger.params, res, next);
};
