'use strict';

var utils = require('../utils/writer.js');
var dataStore = require('../data/dataStore');

module.exports.getCurrentVersion = function getCurrentVersion (req, res, next) {
	utils.writeJson(res, dataStore.currentVersion);
};

module.exports.getUpdateStatus = function getUpdateStatus (req, res, next) {
	utils.writeJson(res, dataStore.updateStatus);
};

module.exports.isLatestVersion = function isLatestVersion (req, res, next) {
	utils.writeJson(res);
};

module.exports.updateVersion = function updateVersion (req, res, next) {
  utils.writeJson(res);
};
