#!/usr/bin/env node
var fileWriter = require('../../output/filewriter');
var Template = require('../../output/template');

exports.export = function (blog, path) {

	return new Promise(function (resolve, reject) {

		postTemplate = new Template('hexo/templates/post.mustache');

		blog.posts.forEach(function (post) {
			var fileName = post.id + '.md';
			
			fileWriter.write(fileName, path, postTemplate.render(post)).then(function () {
				console.log(post.id + ' OK');
			}).catch(function (err) {
				reject(err);
			});

		});

		resolve();

	});

};