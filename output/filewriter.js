var fs = require("fs");
var path = require("path");
var mkdirp = require("mkdirp");

exports.write = function (fileName, filePath, data) {
	return new Promise(function (resolve, reject) {
		
		mkdirp(filePath, function (err) {
			reject(err);
		});
		fs.writeFile(path.join(filePath, fileName), data, function (err) {
			if (err) {
				reject(err);
			}
			resolve();
		});
	});
};
