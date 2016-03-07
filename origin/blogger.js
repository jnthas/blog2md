var slug = require('slug');
var model = require('./model.js');

function Blogger() {};

Blogger.prototype.toModel = function (json) {

	console.log('Atom Version: ', json.version);
	console.log('Generator: ', json.feed.generator.$t + ' v' + json.feed.generator.version);
	console.log('---------------------');
	console.log('Author: ', json.feed.author[0].name.$t);
	console.log('Blog Title: ', json.feed.title.$t);

  var blog = new model.Blog();

  blog.version = json.version;
  blog.encoding = json.encoding;
  blog.lastUpdateDate = json.feed.updated.$t;
  blog.generator = json.feed.generator.$t + ' v' + json.feed.generator.version;
  blog.author = getAuthors(json.feed.author);
  blog.title = json.feed.title.$t;
  
  extractPosts(json.feed.entry, blog);
  
  return blog;	
};

function extractPosts(entries, blog) {

  entries.forEach(function (entry) {

    var post = new model.Post();

    post.id = slug(entry.title.$t, {lower: true});
    post.publishedDate = entry.published.$t;
    post.updatedDate = entry.updated.$t;
    post.categories = getTags(entry.category);
    post.title = entry.title.$t;
    post.author = getAuthors(entry.author);
    post.content = entry.content.$t;

    blog.posts.push(post);
    
  });
}

function getAuthors (authors) {
  return authors.map(function (author) {
    return author.name.$t;
  });
}

function getTags (categories) {
	return categories.map(function (category) {
    return category.term;
  });
}

module.exports = new Blogger();