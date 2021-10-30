'use strict';

var utils = require('../utils/writer.js');
var dataStore = require('../utils/dataStore');

module.exports.createUser = function createUser (req, res, next, body) {
  const data = dataStore.getSessionData(req.session);
	data.users.push(body);
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.deleteUser = function deleteUser (req, res, next, userId) {
  const data = dataStore.getSessionData(req.session);
	data.users = data.users.filter(u => u.email !== userId)
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};

module.exports.getProfile = function getProfile (req, res, next) {
  const data = dataStore.getSessionData(req.session);
	utils.writeJson(res, data.users.find(u => u.email === data.sessionUser));
};

module.exports.getRegisteredUsers = function getRegisteredUsers (req, res, next) {
	const users = dataStore.getSessionData(req.session).users;
	const registeredUsers = users.filter(u => u.ignoreTfa);
	utils.writeJson(res, registeredUsers.map(u => u.email));
};

module.exports.getUser = function getUser (req, res, next, userId) {
  const users = dataStore.getSessionData(req.session).users;
	utils.writeJson(res, users.find(u => u.email === userId));
};

module.exports.getUsers = function getUsers (req, res, next) {
	utils.writeJson(res, dataStore.getSessionData(req.session).users);
};

module.exports.removeUserForwarding = function removeUserForwarding (req, res, next, userId) {
	utils.writeJson(res);
};

module.exports.requestUserForwarding = function requestUserForwarding (req, res, next, userId) {
	utils.writeJson(res);
};

module.exports.requestUserForwardingAuth = function requestUserForwardingAuth (req, res, next, body, userId) {
	utils.writeJson(res);
};

module.exports.setUser = function setUser (req, res, next, body, userId) {
  const data = dataStore.getSessionData(req.session);
	data.users = data.users.filter(m => m.email !== userId);
	data.users.push({
		...body,
		email: userId,
	});
	dataStore.setSessionData(req.session, data);
	utils.writeJson(res);
};
