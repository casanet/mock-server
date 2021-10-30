'use strict';

var utils = require('../utils/writer.js');

module.exports.getMinionsFeed = function getMinionsFeed (req, res, next) {
  utils.writeJson(res);
};

module.exports.getTimingFeed = function getTimingFeed (req, res, next) {
	utils.writeJson(res);
};
