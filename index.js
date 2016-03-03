var request = require('request');

var handler = require('./BloggerHandler.js');

var url = process.argv[2];

request(url, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log('OK!');
		var blog = JSON.parse(body);
		handler.handle(blog);
	}
});