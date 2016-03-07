function Model() {};

Model.prototype.Blog = function () {
	return {
		version: null,
		encoding: null,
		lastUpdateDate: null,
		generator: null,
		author: null,
		title: null,
		posts: []
	};
};

Model.prototype.Post = function () {
	return {
		id: null,
		publishedDate: null,
		updatedDate: null,
		categories: [],
		title: null,
		authors: [],
		content: null
	};
};

module.exports = new Model();