#!/usr/bin/env node
'use strict';
const meow = require('meow');
const w3counter = require('./');

const cli = meow(`
	Usage
	  $ w3counter <type>

	Examples
	  $ w3counter browser
	  $ w3counter os
	  $ w3counter res
`);

if (!cli.input.length) {
	console.error('Specify a type');
	process.exit(1);
}

w3counter(cli.input[0]).then(types => {
	let i = 1;

	for (const type of types) {
		console.log(`${i++}. ${type.item} (${type.percent})`);
	}
});
