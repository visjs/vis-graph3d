#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getRes = require('./');

meow(`
	Usage
	  $ get-res
`);

getRes().then(res => {
	let i = 1;

	for (const r of res) {
		console.log(`${i++}. ${r.item} (${r.percent})`);
	}
});
