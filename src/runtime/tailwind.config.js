const path = require('path');

module.exports = {
	content: {
		relative: true,
		files: [
			path.join(__dirname, 'components') + '/**.vue',
		],
	},
	prefix: 'ww-', // weather widget
	theme: {
		extend: {},
	},
	plugins: [],
}