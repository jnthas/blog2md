#!/usr/bin/env node
/*
 *  Interface
 *    - toModel(json, contentConverter) convert a raw blog json to model defined in ./model.js
 *      contentConverter is used to convert post content to especific format like Markdown.
 */

var slug = require('slug');
var model = require('./model');

function Blogger() {};

Blogger.prototype.toModel = function (json, contentConverter) {

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
  
  extractPosts(json.feed.entry, blog, contentConverter);
  
  return blog;	
};

function extractPosts(entries, blog, contentConverter) {

  entries.forEach(function (entry) {

    var post = new model.Post();

    post.id = slug(entry.title.$t, {lower: true});
    post.publishedDate = entry.published.$t;
    post.updatedDate = entry.updated.$t;
    post.categories = getCategories(entry.category);
    post.title = entry.title.$t;
    post.author = getAuthors(entry.author);
    post.content = contentConverter.convert(entry.content.$t);    

    if (post.author.length === 0) {
      console.log('-> There is no author for post "' + post.title + '"');
    } else if (post.categories.length === 0) {
      console.log('-> There is no category for post "' + post.title + '"');
    }

    blog.posts.push(post);
    
  });
}

function getAuthors (authors) {
  if (authors === undefined) return [];

  return authors.map(function (author) {
    return author.name.$t;
  });
}

function getCategories (categories) {
  if (categories === undefined) return [];

	return categories.map(function (category) {
    return category.term;
  });
}

module.exports = new Blogger();