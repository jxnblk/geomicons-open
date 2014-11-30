/*

    Geomicons Open
    http://jxnblk.github.io/geomicons-open

    SVG Injector

*/

var paths = require('./paths');
var inject = require('./inject');
var camelCase = require('./camel-case');
var error = require('./error');

var Geomicons = {

  inject: function(elements) {

    if (!elements.length) elements = [elements];

    for (var i = 0; i < elements.length; i++) {
      var key = elements[i].getAttribute('data-icon');
      key = camelCase(key);
      var d = paths[key];
      if (!d) {
        error(key);
        return false;
      }
      inject(elements[i], d);
    }

  },

  toString: require('./to-string')

};

module.exports = Geomicons;


