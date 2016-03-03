function BloggerHandler() {};

BloggerHandler.prototype.handle = function (data) {
		console.log('Atom Version: ', data.version);
		console.log('Generator: ', data.feed.generator.$t + ' v' + data.feed.generator.version);
		console.log('---------------------');
		console.log('Author: ', data.feed.author[0].name.$t);
		console.log('Blog Title: ', data.feed.title.$t);
};

module.exports = new BloggerHandler();