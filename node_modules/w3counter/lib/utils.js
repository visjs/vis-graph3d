'use strict';
const got = require('got');
const cheerio = require('cheerio');

const types = {
	'Web Browsers': 'browser',
	'Platforms': 'os',
	'Screen Resolutions': 'res'
};

exports.types = Object.keys(types).map(x => types[x]);

exports.load = () => got('www.w3counter.com/globalstats.php').then(res => {
	const $ = cheerio.load(res.body);

	const stats = {};

	$('th').each((i, el) => {
		let type = $(el).text().replace(/^Top 10/, '').trim();

		if (!types[type]) {
			return;
		}

		type = types[type];

		$(el).parent().nextAll('tr').each((i, el) => {
			if (!stats[type]) {
				stats[type] = [];
			}

			stats[type].push({
				item: $(el).children('.item').text(),
				percent: $(el).children('.pct').text()
			});
		});
	});

	return stats;
});
