'use strict';

var randomstring = require("randomstring");
var utils = require('../utils/writer.js');
var dataStore = require('../data/dataStore');

module.exports.createMinion = function createMinion(req, res, next, body) {
	const data = dataStore.getSessionData(req.session);
	data.minions.push({
		...body,
		isProperlyCommunicated: true,
		minionId: randomstring.generate(7),
		minionStatus: { [body.minionType]: dataStore.deleteSessionData[body.minionType] },
	})
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.deleteMinion = function deleteMinion(req, res, next, minionId) {
	const data = dataStore.getSessionData(req.session);
	data.minions = data.minions.filter(m => m.minionId !== minionId);
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.getMinion = function getMinion(req, res, next, minionId) {
	const data = dataStore.getSessionData(req.session);
	const minion = data.minions.find(m => m.minionId === minionId);
	utils.writeJson(res, minion);
};

module.exports.getMinions = function getMinions(req, res, next) {
	utils.writeJson(res, dataStore.getSessionData(req.session).minions);
};

module.exports.getMinionsTimeline = function getMinionsTimeline(req, res, next) {
	utils.writeJson(res, dataStore.getSessionData(req.session).timeline);
};

module.exports.getSescaningMinionsStatus = function getSescaningMinionsStatus(req, res, next) {
	utils.writeJson(res, dataStore.scanStatus);
};

module.exports.notifyMinionStatusChanged = function notifyMinionStatusChanged(req, res, next, body, minionId) {
	utils.writeJson(res);
};

module.exports.powerAllOff = function powerAllOff(req, res, next) {
	utils.writeJson(res);
};

module.exports.renameMinion = function renameMinion(req, res, next, body, minionId) {
	const data = dataStore.getSessionData(req.session);
	const minion = data.minions.find(m => m.minionId === minionId);
	minion.name = body.name;
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.renameRoom = function renameRoom(req, res, next, body, minionId) {
	const data = dataStore.getSessionData(req.session);
	const minion = data.minions.find(m => m.minionId === minionId);
	minion.room = body.room;
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.rescanMinionStatus = function rescanMinionStatus(req, res, next, minionId) {
	utils.writeJson(res, dataStore.scanStatus);
};

module.exports.rescanMinionsStatus = function rescanMinionsStatus(req, res, next, scanNetwork) {
	utils.writeJson(res);
};

module.exports.setMinion = function setMinion(req, res, next, body, minionId) {
	const data = dataStore.getSessionData(req.session);
	const minion = data.minions.find(m => m.minionId === minionId);
	minion.minionStatus = body;
	const user = data.users.find(u => u.email === data.sessionUser);
	data.timeline.unshift({
		minionId,
		status: body,
		timestamp: new Date(),
		trigger: 'user',
		user: {
			name: user.displayName,
			email: user.email,
		}
	});
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.setMinionCalibrate = function setMinionCalibrate(req, res, next, body, minionId) {
	const data = dataStore.getSessionData(req.session);
	const minion = data.minions.find(m => m.minionId === minionId);
	minion.calibration = body;
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.setMinionTimeout = function setMinionTimeout(req, res, next, body, minionId) {
	const data = dataStore.getSessionData(req.session);
	const minion = data.minions.find(m => m.minionId === minionId);
	minion.minionAutoTurnOffMS = body.setAutoTurnOffMS;
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.getMinionsTimeout = function getMinionsTimeout(req, res, next) {
	const data = dataStore.getSessionData(req.session);
	utils.writeJson(res, data.timeout);
};

module.exports.restartMinionTimeout = function restartMinionTimeout(req, res, next, minionId) {
	const data = dataStore.getSessionData(req.session);
	data.timeout[0].countdownTimestamp = new Date().getTime();
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};