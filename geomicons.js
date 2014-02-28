// Geomicons image replacement js
//
// This currently creates a second network request
// for each icon.
// To do: get icon from cache, or prevent downloads
// of img src

var icons = document.getElementsByClassName('geomicon'),
    injectSvg,
    getIcon;

injectSvg = function(el, svg){
  el.parentNode.replaceChild(svg, el);
};

getIcon = function(el, path) {
  xhr(path, function(err, resp) {
    if(resp) {
      var svg = resp.responseXML.documentElement;
      svg.setAttribute('class', el.className);
      injectSvg(el, svg);
    }
    if(err) console.log(err);
  }, true);
};

for (var i = 0; i < icons.length; i++) {
  var icon = icons[i];
  var path = icon.getAttribute('src');
  icon.style.display = 'none';
  icon.setAttribute('src', '');
  getIcon(icon, path);
};

