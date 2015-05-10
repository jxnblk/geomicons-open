
var paths = require('../paths'); 
var camelCase = require('./camel-case');
var error = require('./error');

module.exports = function(key) {

  var string = '';
  var d = paths[camelCase(key)] || false;

  if (!d) {
    error(key);
    return false;
  }

  string = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="fill:currentcolor">',
    '<title>' + key + ' icon</title>',
    '<path d="' + d + '"/>',
    '</svg>'
  ].join(' ');

  return string;

};

