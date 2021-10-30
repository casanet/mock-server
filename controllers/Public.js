'use strict';

var utils = require('../utils/writer.js');

module.exports.getStaticsAssets = function getStaticsAssets (req, res, next) {
	utils.writeJson(res);
};
