#!/usr/bin/env node

var hogan = require("hogan.js");
var fs = require("fs");
var path = require('path');

function Template(staticGenPath, templateFile) {
	var fullPath = path.join(staticGenPath, 'templates', templateFile);	
	var content = fs.readFileSync(fullPath);
	this.templateFile = hogan.compile(content.toString());
};

Template.prototype.render = function (data) {
	return this.templateFile.render(data);
};

module.exports = Template;
