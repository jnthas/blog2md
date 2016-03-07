var input = require('./input/http.js');
var format = require('./format/json.js');
var origin = require('./origin/blogger.js');
var staticgen = require('./staticgens/hexo/hexo.js');

var url = process.argv[2];
var outputPath = './result'


input.getFeed(url).then(function (data) {
  var rawBlog = format.toJson(data);
  var model = origin.toModel(rawBlog);

  staticgen.export(model, outputPath).then(function () {
    console.log('Finished!');
  }).catch(function (err) {
    console.log('app.js > ', err);
  });

}).catch(function (err) {
	console.log(err);
});


