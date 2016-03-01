var request = require('request');

var url = process.argv[2];

request(url, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log('OK!');
		var blog = JSON.parse(body);
		console.log('Atom Version: ', blog.version);
		console.log('Generator: ', blog.feed.generator.$t + ' v' + blog.feed.generator.version);
		console.log('---------------------');
		console.log('Author: ', blog.feed.author[0].name.$t);
		console.log('Blog Title: ', blog.feed.title.$t);
		
	}
});