'use strict';

var utils = require('../utils/writer.js');

module.exports.createOperation = function createOperation (req, res, next, body) {
  utils.writeJson(res);
};

module.exports.deleteOperation = function deleteOperation (req, res, next, operationId) {
  utils.writeJson(res);
};

module.exports.getOperation = function getOperation (req, res, next, operationId) {
  utils.writeJson(res);
};

module.exports.getOperations = function getOperations (req, res, next) {
  utils.writeJson(res);
};

module.exports.setOperation = function setOperation (req, res, next, body, operationId) {
	utils.writeJson(res);
};

module.exports.triggerOperation = function triggerOperation (req, res, next, operationId) {
  utils.writeJson(res);
};
