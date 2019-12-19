'use strict';
const utils = require('./lib/utils');
const stats = require('./data.json').stats;

module.exports = type => {
	if (typeof type !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	if (utils.types.indexOf(type) === -1) {
		return Promise.reject(new Error(`Type '${type}' doesn't exist`));
	}

	return utils.load()
		.then(stats => {
			if (!stats[type].length) {
				throw new Error(`Couldn't get any ${type}`);
			}

			return stats[type];
		})
		.catch(err => {
			if (stats[type]) {
				return stats[type];
			}

			throw err;
		});
};
