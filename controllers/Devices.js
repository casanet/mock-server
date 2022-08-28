'use strict';

var utils = require('../utils/writer.js');
var dataStore = require('../data/dataStore');

module.exports.getDevices = function getDevices (req, res, next) {
	utils.writeJson(res, dataStore.getSessionData(req.session).devices);
};

module.exports.getDevicesKinds = function getDevicesKinds (req, res, next) {
  utils.writeJson(res, dataStore.getSessionData(req.session).devicesKinds);
};

module.exports.rescanDevices = function rescanDevices (req, res, next) {
	utils.writeJson(res);
};

module.exports.setDeviceName = function setDeviceName (req, res, next, body, deviceMac) {
	const data = dataStore.getSessionData(req.session);

	for (const device of data.devices) {
		if(device.mac === deviceMac) {
			device.name = body.name;
			break;
		}
	}
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};
