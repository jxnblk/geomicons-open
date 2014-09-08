/*

    Geomicons Open
    http://jxnblk.github.io/geomicons-open

    SVG Injector

*/

var paths = require('./paths');
var inject = require('./inject');

var Geomicons = function() {

  var camelCase = function(string) {
    return string.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  };

  return {

    inject: function(elements) {
      for (var i = 0; i < elements.length; i++) {
        var id = elements[i].getAttribute('data-icon');
        id = camelCase(id);
        var d = paths[id];
        inject(elements[i], d);
      }
    }

  }

};

module.exports = Geomicons;


