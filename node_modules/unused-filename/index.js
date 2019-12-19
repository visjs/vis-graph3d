'use strict';
const pathExists = require('path-exists');
const modifyFilename = require('modify-filename');

const incrementer = filePath => {
	let counter = 0;
	return () => modifyFilename(filePath, (filename, extension) => `${filename} (${++counter})${extension}`);
};

const unusedFilename = filePath => {
	const getFilePath = incrementer(filePath);
	const find = async newFilePath => await pathExists(newFilePath) ? find(getFilePath()) : newFilePath;
	return find(filePath);
};

module.exports = unusedFilename;
// TODO: Remove this for the next major release
module.exports.default = unusedFilename;

module.exports.sync = filePath => {
	const getFilePath = incrementer(filePath);
	const find = newFilePath => pathExists.sync(newFilePath) ? find(getFilePath()) : newFilePath;
	return find(filePath);
};
