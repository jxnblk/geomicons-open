
var fs = require('fs');
var path = require('path');
var geomicons = require('..');

var css = [
  '/*! Geomicons Open */\n'
];

css.push([
  '.geomicon::before {',
  '  content: "";',
  '  display: inline-block;',
  '  background-size: 1em;',
  '  width: 1em;',
  '  height: 1em;',
  '}\n',
].join('\n'));

function addChildSvg(name) {
  var contents = geomicons.paths[name];
  var svg = [
    '<svg xmlns=\'http://www.w3.org/2000/svg\' ',
    'viewBox=\'0 0 32 32\' width=\'16\' height=\'16\' fill=\'black\'>',
    '<path d=\'' + contents + '\'></path>',
    '</svg>'
  ].join('');
  var style = [
    '.geomicon-' + name + '::before {',
    '  background-image: url("data:image/svg+xml;utf8,' +
      svg +
      '");',
    '}\n'
  ].join('\n');
  css.push(style);
}

Object.keys(geomicons.paths).forEach(function(key) {
  addChildSvg(key);
});


fs.writeFileSync(path.join(__dirname, '../dist/geomicons.css'), css.join('\n'));

