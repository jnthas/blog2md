var slug = require('slug');
var exporter = require('./exporter.js');
var toMarkdown = require('to-markdown');

function BloggerHandler() {};

BloggerHandler.prototype.handle = function (data) {
		console.log('Atom Version: ', data.version);
		console.log('Generator: ', data.feed.generator.$t + ' v' + data.feed.generator.version);
		console.log('---------------------');
		console.log('Author: ', data.feed.author[0].name.$t);
		console.log('Blog Title: ', data.feed.title.$t);


		var divConverter = {
			filter: 'div',
			replacement: function (content) {
				return content;
			}
		};

		data.feed.entry.forEach(function (entry) {
			var post = {
				title: entry.title.$t,
			  	date: entry.published.$t,
			  	updated: entry.updated.$t,
			  	tags: joinTags(entry.category),
			  	permalink: slug(entry.title.$t, {lower: true}),
			  	content: toMarkdown(entry.content.$t, {converters: [divConverter]})
			};

			exporter.export(post);
			
		});
};


function joinTags (tags) {
	var t = '';
	tags.forEach(function (tag) {
		t += ',' + tag.term;
	});
	return t.substring(1);
}

module.exports = new BloggerHandler();