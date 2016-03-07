var toMarkdown = require('to-markdown');

exports.convert = function (content) {
  return toMarkdown(content, {converters: getTagReplacements()});
};

function getTagReplacements () {
  var div = {
    filter: 'div',
    replacement: function (content) {
      return content;
    }
  };

  return [div];
}
