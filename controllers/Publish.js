'use strict';

var url = require('url');


var Publish = require('./PublishService');


module.exports.putDataobj = function putDataobj (req, res, next) {
  Publish.putDataobj(req.swagger.params, res, next);
};
