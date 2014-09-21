
var through = require('through2');
var gutil = require('gulp-util');

module.exports = function() {

  var camelCase = function(string) {
    return string.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  };


  var pathsArr = [];

  var transform = function(file, enc, cb) {
    var name = file.relative.split('.')[0];
    name = camelCase(name);
    var contents = String(file.contents).replace(/\r?\n|\r/g, ' ');
    pathsArr.push(name + ': ' + '\'' + contents + '\'');
    cb();
  };


  var flush = function(cb) {

    var string = 'module.exports = {\n';
    string += '  ' + pathsArr.join(',\n  ');
    string += '\n};\n';

    var newFile = new gutil.File({
      base: __dirname,
      cwd: __dirname,
      path: __dirname + '/paths.js',
      contents: new Buffer(string)
    });

    this.push(newFile);

    cb();

  };


  return through.obj(transform, flush);


};

