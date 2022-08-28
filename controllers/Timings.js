'use strict';

var utils = require('../utils/writer.js');
var randomstring = require("randomstring");
var dataStore = require('../data/dataStore');

module.exports.createTiming = function createTiming(req, res, next, body) {
	const data = dataStore.getSessionData(req.session);
	data.timings.push({
		...body,
		timingId: randomstring.generate(7),
	});
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.deleteTiming = function deleteTiming(req, res, next, timingId) {
	const data = dataStore.getSessionData(req.session);
	data.timings = data.timings.filter(t => t.timingId !== timingId);
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.getTiming = function getTiming(req, res, next, timingId) {
	const data = dataStore.getSessionData(req.session);
	const timing = data.timings.find(t => t.timingId === timingId);
	utils.writeJson(res, timing);
};

module.exports.getTimings = function getTimings(req, res, next) {
	utils.writeJson(res, dataStore.getSessionData(req.session).timings);
};

module.exports.setTiming = function setTiming(req, res, next, body, timingId) {
	const data = dataStore.getSessionData(req.session);
	data.timings = data.timings.filter(t => t.timingId !== timingId);
	data.timings.push({
		...body,
		timingId,
	});
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};
