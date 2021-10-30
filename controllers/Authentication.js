'use strict';

var randomstring = require("randomstring");
var utils = require('../utils/writer.js');
var dataStore = require('../utils/dataStore');

module.exports.login = function login (req, res, next, body) {
	// Once user login, generate new session, and create new set of mock data for him
	const session = randomstring.generate();
	// Get the session key as api_key, by it as authentication the next requests will got data according to this session
	res.append('authentication', session);
	res.append('Access-Control-Allow-Headers', 'Authorization');
	res.append('Access-Control-Expose-Headers', 'Authentication');
	dataStore.addSessionData(session, body.email);
	utils.writeJson(res);
};

module.exports.loginTfa = function loginTfa (req, res, next, body) {
  utils.writeJson(res);
};

module.exports.logout = function logout (req, res, next) {
	// Remove session session and data
  dataStore.deleteSessionData(req.session);
  res.append('authentication', '');
	res.append('Access-Control-Allow-Headers', 'Authorization');
	res.append('Access-Control-Expose-Headers', 'Authentication');
	utils.writeJson(res);
};

module.exports.logoutSessions = function logoutSessions (req, res, next, userId) {
	// Remove session session and data
  dataStore.deleteSessionData(req.session);
	utils.writeJson(res);
};
