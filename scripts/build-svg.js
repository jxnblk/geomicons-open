
var fs = require('fs');
var path = require('path');
var geomicons = require('..');

function buildSvg(name) {
  var contents = geomicons.paths[name];
  var svg = [
    '<svg id="' + name + '" xmlns="http://www.w3.org/2000/svg"' +
    ' viewBox="0 0 32 32" width="32" height="32" fill="currentcolor">',
    '  <path d="' + contents + '"></path>',
    '</svg>'
  ].join('\n');;
  fs.writeFileSync(path.join(__dirname, '../dist/icons/' + name + '.svg'), svg);
  console.log(name + '.svg saved');
}

Object.keys(geomicons.paths).forEach(function(key) {
  buildSvg(key);
});

