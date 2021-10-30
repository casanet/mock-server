'use strict';

var utils = require('../utils/writer.js');

module.exports.isIftttEnabled = function isIftttEnabled (req, res, next) {
  utils.writeJson(res);
};

module.exports.setIftttIntegrationSettings = function setIftttIntegrationSettings (req, res, next, body) {
  utils.writeJson(res);
};

module.exports.triggeredMinionAction = function triggeredMinionAction (req, res, next, body, minionId) {
  utils.writeJson(res);
};

module.exports.triggeredOperationAction = function triggeredOperationAction (req, res, next, body, operationId) {
  utils.writeJson(res);
};

module.exports.triggeredSomeAction = function triggeredSomeAction (req, res, next, body) {
	utils.writeJson(res);
};
