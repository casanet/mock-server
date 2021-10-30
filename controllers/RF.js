'use strict';

var utils = require('../utils/writer.js');
var dataStore = require('../utils/dataStore');

module.exports.fetchDeviceCommandsToMinion = function fetchDeviceCommandsToMinion (req, res, next, body, minionId) {
  utils.writeJson(res);
};

module.exports.generateMinionCommand = function generateMinionCommand (req, res, next, body, minionId) {
  utils.writeJson(res);
};

module.exports.getCommandsRepoAvailableDevices = function getCommandsRepoAvailableDevices (req, res, next) {
	utils.writeJson(res, dataStore.commandsRepoAvailableDevices);
};

module.exports.recordMinionCommand = function recordMinionCommand (req, res, next, body, minionId) {
  utils.writeJson(res);
};
