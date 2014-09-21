/*

    Geomicons Open
    http://jxnblk.github.io/geomicons-open

    SVG Injector

*/

var paths = require('./paths');
var inject = require('./inject');

var Geomicons = {

  inject: function(elements) {

    var camelCase = function(string) {
      return string.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    };

    for (var i = 0; i < elements.length; i++) {
      var id = elements[i].getAttribute('data-icon');
      id = camelCase(id);
      var d = paths[id];
      if (!d) {
        var iconList = [];
        for (var key in paths) {
          iconList.push(key);
        };
        iconList = iconList.join();
        console.error(
          'No icon found for ' + id + '.\n' +
          'Geomicons Open includes the following icons: \n' + iconList
        );
      } else {
        inject(elements[i], d);
      }
    }

  }


};

module.exports = Geomicons;


