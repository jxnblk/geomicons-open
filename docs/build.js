
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var cssnext = require('cssnext');
var data = require('../package.json');
var geomicons = require('..');

var tpl = _.template(fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8'));
var html;

data.css = cssnext('@import "blk"; @import "./docs/geomicons";', {
  compress: true,
  features: {
    colorRgba: false,
    rem: false,
    pseudoElements: false,
  }
});

data.icons = Object.keys(geomicons.paths);

html = tpl(data);

fs.writeFileSync(path.join(__dirname, '../index.html'), html);

