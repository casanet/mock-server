'use strict';

var utils = require('../utils/writer.js');
var randomstring = require("randomstring");
var dataStore = require('../data/dataStore');

module.exports.createAction = function createAction(req, res, next, body) {
  const data = dataStore.getSessionData(req.session);
  const newAction = { ...body, actionId: randomstring.generate(7) };
  data.actions.push(newAction);
  dataStore.setSessionData(req.session, data);
  utils.writeJson(res, newAction);
};

module.exports.deleteAction = function deleteAction(req, res, next, actionId) {
  const data = dataStore.getSessionData(req.session);
  data.actions = data.timings.filter(a => a.actionId !== actionId);
  dataStore.setSessionData(req.session, data);
  utils.writeJson(res);
};

module.exports.getAction = function getAction(req, res, next, actionId) {
  const data = dataStore.getSessionData(req.session);
  const action = data.actions.find(a => a.actionId === actionId);
  utils.writeJson(res, action);
};

module.exports.getActionByMinion = function getActionByMinion(req, res, next, minionId) {
  const data = dataStore.getSessionData(req.session);
  const actions = data.actions.filter(a => a.minionId !== minionId);
  utils.writeJson(res, actions);
};

module.exports.getActions = function getActions(req, res, next) {
  utils.writeJson(res, dataStore.getSessionData(req.session).actions);
};

module.exports.setAction = function setAction(req, res, next, body, actionId) {
  const data = dataStore.getSessionData(req.session);
  data.actions = data.actions.filter(a => a.actionId !== actionId);
  data.actions.push({
    ...body,
    actionId,
  });
  dataStore.setSessionData(req.session, data);
  utils.writeJson(res);
};

module.exports.setActionActive = function setActionActive(req, res, next, actionId, active) {
  const data = dataStore.getSessionData(req.session);
  const action = data.actions.find(a => a.actionId === actionId);
  if(action) {
      action.active = active;
  }
  dataStore.setSessionData(req.session, data);
  utils.writeJson(res);
};
