'use strict';
const devices = require('./data').devices;
const customDevices = require('./custom');

module.exports = items => {
	const list = devices.concat(customDevices);

	if (items && !Array.isArray(items)) {
		throw new Error(`Expected \`Array\`, got \`${typeof items}\``);
	}

	if (!items) {
		return list;
	}

	items = items.map(x => x.split(' ').join('').toLowerCase());

	let ret = [];

	for (const x of items) {
		ret = ret.concat(list.filter(y => y.name.split(' ').join('').includes(x)));
	}

	if (!ret.length) {
		throw new Error('Couldn\'t get any items');
	}

	return ret;
};
