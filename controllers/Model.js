'use strict';

var url = require('url');


var Model = require('./ModelService');


module.exports.rGetModelFiles = function rGetModelFiles (req, res, next) {
  Model.rGetModelFiles(req.swagger.params, res, next);
};

module.exports.rUpdateModel = function rUpdateModel (req, res, next) {
  Model.rUpdateModel(req.swagger.params, res, next);
};

module.exports.rUpdateProj = function rUpdateProj (req, res, next) {
  Model.rUpdateProj(req.swagger.params, res, next);
};
