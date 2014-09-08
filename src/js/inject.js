// Replaces element with SVG

module.exports = function(el, pathdata) {

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

