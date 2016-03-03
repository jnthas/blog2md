var fs = require("fs");
var hogan = require("hogan.js");
var templateFile = fs.readFileSync("templates/post.mustache");
var template = hogan.compile(templateFile.toString());

var post = {
  title: 'Introdução a Engenharia de Software',
  date: '02/05/2016',
  updated: null,
  tags: 'modulo1, unidade1, capitulo2',
  permalink: 'intro-engenharia-software',
  content: '<h1>Introdução a Engenharia de Software<h1>'
};

console.log(template.render(post));