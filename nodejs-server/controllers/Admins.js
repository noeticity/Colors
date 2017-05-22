'use strict';

var url = require('url');


var Admins = require('./AdminsService');


module.exports.addColor = function addColor (req, res, next) {
  Admins.addColor(req.swagger.params, res, next);
};
