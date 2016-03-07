var markup = require('../../markup/markdown.js');
var fileWriter = require('../../output/filewriter.js');
var Template = require('../../output/template.js');

exports.export = function (blog, path) {

	return new Promise(function (resolve, reject) {

		postTemplate = new Template('hexo/templates/post.mustache');

		blog.posts.forEach(function (post) {
			var fileName = post.id + '.md';
			
			post.content = markup.convert(post.content);
			console.log(post.id + ' OK');
			fileWriter.write(fileName, path, postTemplate.render(post)).then(function () {
				console.log(post.id + ' OK');
			}).catch(function (err) {
				reject(err);
			});

		});

		console.log('resolve()');
		resolve();

	});

};