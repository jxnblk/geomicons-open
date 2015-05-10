
var camelCase = require('./camel-case');
var paths = require('../paths');

function inject(el, pathdata) {

  console.log('inject', el, pathdata);

  var svg;
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  if (el.tagName == 'svg') {
    svg = el.cloneNode(true);
  } else {
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    for (var i = 0; i < el.attributes.length; i++) {
      svg.setAttribute(el.attributes[i].name, el.attributes[i].value);
    }
  }

  svg.setAttribute('viewBox', '0 0 32 32');
  svg.setAttribute('style', 'fill:currentcolor');
  path.setAttribute('d', pathdata);
  svg.appendChild(path);

  el.parentNode.replaceChild(svg, el);

};

module.exports = function(elements) {

  if (!elements.length) elements = [elements];

  if (typeof document !== 'undefined') {
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
  } else {
    console.error('geomicons.inject() only works in a browser context');
    return false;
  }

};

