#!/usr/bin/env node
var input = require('./input/http');
var format = require('./format/json');
var origin = require('./origin/blogger');
var staticgen = require('./staticgens/hexo/hexo');
var markup = require('./markup/markdown');

var url = process.argv[2];
var outputPath = './result'

input.getFeed(url).then(function (data) {
  var rawBlog = format.toJson(data);
  var model = origin.toModel(rawBlog, markup);

  staticgen.export(model, outputPath).then(function () {
    console.log('Finished!');
  }).catch(function (err) {
    console.log(err);
  });

}).catch(function (err) {
	console.log(err);
});
