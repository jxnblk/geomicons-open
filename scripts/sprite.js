
var fs = require('fs');
var path = require('path');
var geomicons = require('..');

var sprite = [
  '<svg xmlns="http://www.w3.org/2000/svg">'
];

var defs = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs>'
];


function addChildSvg(name) {
  var contents = geomicons.paths[name];
  var svg = [
    '<svg id="' + name + '" xmlns="http://www.w3.org/2000/svg"' +
    ' viewBox="0 0 32 32" width="32" height="32" fill="currentcolor">',
    '  <path d="' + contents + '"></path>',
    '</svg>'
  ].join('\n');;
  sprite.push(svg);
  defs.push(svg);
}

Object.keys(geomicons.paths).forEach(function(key) {
  addChildSvg(key);
});

sprite.push('</svg>');
defs.push('</defs></svg>');

fs.writeFileSync(path.join(__dirname, '../dist/geomicons.svg'), sprite.join('\n'));
fs.writeFileSync(path.join(__dirname, '../dist/geomicons-defs.svg'), defs.join('\n'));

