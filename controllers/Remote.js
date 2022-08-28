'use strict';

var utils = require('../utils/writer.js');
var randomstring = require("randomstring");
var dataStore = require('../data/dataStore');

module.exports.getConnectionStatus = function getConnectionStatus (req, res, next) {
	utils.writeJson(res, dataStore.connectionStatus);
};

module.exports.getMachineMac = function getMachineMac (req, res, next) {
	utils.writeJson(res, JSON.stringify(randomstring.generate(12)));
};

module.exports.getRemoteHost = function getRemoteHost (req, res, next) {
	// Return the origin URL as WS protocol
  utils.writeJson(res, JSON.stringify(req.get('origin')?.replace('http', 'ws')));
};

module.exports.removeRemoteSettings = function removeRemoteSettings (req, res, next) {
  utils.writeJson(res);
};

module.exports.setRemoteSettings = function setRemoteSettings (req, res, next, body) {
	utils.writeJson(res);
};
