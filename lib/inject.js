
var camelCase = require('./camel-case');
var paths = require('../paths');

function inject(el, key) {

  var pathdata = paths[key];

  var svg;
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');

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
  title.innerHTML = key + ' icon';
  path.setAttribute('d', pathdata);

  svg.appendChild(title);
  svg.appendChild(path);

  el.parentNode.replaceChild(svg, el);

};

module.exports = function(elements) {

  if (!elements.length) elements = [elements];

  if (typeof document !== 'undefined') {
    for (var i = 0; i < elements.length; i++) {
      var key = elements[i].getAttribute('data-icon');
      key = camelCase(key);
      if (!paths[key]) {
        error(key);
        return false;
      }
      inject(elements[i], key);
    }
  } else {
    console.error('geomicons.inject() only works in a browser context');
    return false;
  }

};

