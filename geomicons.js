//
// Geomicons Open
// 
// http://jxnblk.github.io/geomicons-open
// JS SVG injection
// 


var hook = 'geomicon', // Class hook to replace icons
    icons = document.getElementsByClassName(hook),
    iconUrl = 'geomicons.svg', // Location of svg sprite
    xmlHttp = null,
    injectSvg,
    sprite;

xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', iconUrl, false);
xmlHttp.send(null);

if(xmlHttp.responseXML) {
  sprite = xmlHttp.responseXML.documentElement;
} else {
  console.error('Geomicon sprite not found - check iconUrl variable.');
}

injectSvg = function(el, svg){
  svg.setAttribute('class', el.className);
  el.parentNode.replaceChild(svg, el);
};

for (var i = 0; i < icons.length; i++){
  var icon = icons[i],
      id = icon.getAttribute('data-id'),
      svg = sprite.getElementById(id);
  if(svg) {
    svg = svg.cloneNode(true);
    svg.id = id + '-' + i;
    icon.className += ' geomicon-' + id;
    injectSvg(icon, svg);
  }
};

