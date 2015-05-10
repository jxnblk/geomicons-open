
var fs = require('fs');
var path = require('path');
var geomicons = require('..');

fs.writeFileSync(path.join(__dirname, '../dist/paths.json'), JSON.stringify(geomicons.paths, null, ''));

