
var through = require('through2');
var gutil = require('gulp-util');

module.exports = function() {

  var transform = function(file, enc, cb) {

    var name = file.relative.split('.')[0];
    var contents = String(file.contents).replace(/\r?\n|\r/g, ' ');

    // Build SVG
    var svg = '<svg id="' + name + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="currentcolor">\n' +
      '  <path d="' + contents + '"></path>\n' +
      '</svg>';

    file.contents = new Buffer(svg); 

    file.path = gutil.replaceExtension(file.path, '.svg');

    console.log(file.relative);

    this.push(file);
    cb();

  };

  return through.obj(transform);


};

