'use strict';

var utils = require('../utils/writer.js');

module.exports.getLastLogs = function getLastLogs (req, res, next) {
	utils.writeJson(res);
};

module.exports.getSettingsBackup = function getSettingsBackup (req, res, next) {
  utils.writeJson(res);
};
