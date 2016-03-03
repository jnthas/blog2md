function BlogModel() {};

BlogModel.prototype.newInstanceOfBlog = function () {
	var blog = {
		version: null,
		encoding: null,
		lastUpdateDate: null,
		categories: [],
		generator: null,
		author: null,
		blogTitle: null,
		entries: []
	};

	return blog;
};


BlogModel.prototype.newInstanceOfEntry = function () {

	var entry = {
		id: null,
		publishedDate: null,
		updatedDate: null,
		categories: [],
		title: null,
		author: null,
		content: null
	};


	return entry;
};

module.exports = new BlogModel();