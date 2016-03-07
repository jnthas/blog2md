/*
 *	Interface
 *		- getFeed(path) returns a string of blog content 
 */

var request = require('request');

exports.getFeed = function (url) {
	return new Promise(function (resolve, reject) {
		request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log('OK!');
				resolve(body);
			} else {
				reject(error, response);
			}
		});
	});
}

