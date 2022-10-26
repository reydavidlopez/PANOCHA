module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,mp3,png,jpg,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};