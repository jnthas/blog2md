var fs = require("fs");
var hogan = require("hogan.js");
var templateFile = fs.readFileSync("templates/post.mustache");
var template = hogan.compile(templateFile.toString());

/*
var post = {
  title: 'Introdução a Engenharia de Software',
  date: '02/05/2016',
  updated: null,
  tags: 'modulo1, unidade1, capitulo2',
  permalink: 'intro-engenharia-software',
  content: '<h1>Introdução a Engenharia de Software<h1>'
};
*/


exports.export = function (entry) {
	var post = template.render(entry);
	return writeFile('./posts/' + entry.permalink + '.md', post);
};

function writeFile (fileName, data) {
	fs.writeFile(fileName, data, function (err) {
		if (err) {
			throw err;
		}
		return true;
	});

}
