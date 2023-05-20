'use strict';

const NodeCache = require("node-cache");

// The predefined data for each new session data
const { minions } = require("./predefined/minions");
const { timings } = require("./predefined/timings");
const { devices } = require("./predefined/devices");
const { actions } = require("./predefined/actions");
const { devicesKinds } = require("./predefined/devicesKinds");
const { users } = require("./predefined/users");
const { profile } = require("./predefined/profile");
const { commandsRepo } = require("./predefined/commandsRepo");
const { defaultMinionStatus } = require("./predefined/minionStatus");
const { genTimeline } = require("./predefined/timeline");
const { getTimeout } = require("./predefined/timeout");


// Store all data map to the session, with TTL to release memory.
const dataStore = new NodeCache({
	// Hold data for 10 minutes only
	stdTTL: 10 * 60,
	// Clone all objects, to only copy and not edit other session data
	useClones: true,
});


// The const data for mock requests
exports.currentVersion = {
	"version": "4.0.17",
	"commitHash": "23746d2",
	"timestamp": 1661671092461,
};
exports.updateStatus = JSON.stringify("finished");
exports.scanStatus = JSON.stringify("finished");
exports.commandsRepoAvailableDevices = commandsRepo;
exports.connectionStatus = JSON.stringify("connectionOK");
exports.defaultMinionStatus = defaultMinionStatus;

/**
 * Create new session
 * Copy the predefined data to state from the predefined state as session ata
 * @param {string} session Session key
 * @param {string} email The logged user 
 */
exports.addSessionData = function (session, email) {
	// Create the session "profile";
	const sessionProfile = { ...profile, email };
	dataStore.set(session, {
		minions,
		timings,
		actions,
		devices,
		devicesKinds,
		timeout : getTimeout(),
		timeline: genTimeline(),
		// Keep session user
		sessionUser: email,
		// Append profile to predefined users
		users: [...users, sessionProfile]
	});
}

/**
 * Remove session (and session data)
 * @param {string} session Session key
 */
exports.deleteSessionData = function (session) {
	dataStore.del(session);
}

/**
 * Update session data
 * @param {string} session Session key
 * @param {*} data The new data to set
 */
exports.setSessionData = function (session, data) {
	dataStore.set(session, data);
}

/**
 * Get session data
 * @param {*} session Session key
 * @returns The session data
 */
exports.getSessionData = function (session) {
	const data = dataStore.get(session);
	return data;
}
