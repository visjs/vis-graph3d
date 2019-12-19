'use strict';
const isPlainObject = require('is-plain-obj');

module.exports = (object, options = {}) => {
	if (!isPlainObject(object)) {
		throw new TypeError('Expected a plain object');
	}

	const {deep} = options;
	const seenInput = [];
	const seenOutput = [];

	const sortKeys = object => {
		const seenIndex = seenInput.indexOf(object);

		if (seenIndex !== -1) {
			return seenOutput[seenIndex];
		}

		const result = {};
		const keys = Object.keys(object).sort(options.compare);

		seenInput.push(object);
		seenOutput.push(result);

		for (const key of keys) {
			const value = object[key];

			if (deep && Array.isArray(value)) {
				result[key] = value.map(arrayValue => isPlainObject(arrayValue) ? sortKeys(arrayValue) : arrayValue);
				continue;
			}

			result[key] = deep && isPlainObject(value) ? sortKeys(value) : value;
		}

		return result;
	};

	return sortKeys(object);
};
