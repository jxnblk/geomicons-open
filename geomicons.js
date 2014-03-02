// Geomicons image replacement js
//
// This currently creates a second network request
// for each icon.
// To do: get icon from cache, or prevent downloads
// of img src

var icons = document.getElementsByClassName('geomicon'),
    spriteIcons = document.getElementsByClassName('geo-sprite'),
    injectSvg,
    getIcon;

injectSvg = function(el, svg){
  svg.setAttribute('class', el.className);
  el.parentNode.replaceChild(svg, el);
};

//getIcon = function(el, path) {
//  xhr(path, function(err, resp) {
//    if(resp) {
//      var svg = resp.responseXML.documentElement;
//      injectSvg(el, svg);
//    }
//    if(err) console.log(err);
//  }, true);
//};

//for (var i = 0; i < icons.length; i++) {
//  var icon = icons[i];
//  var path = icon.getAttribute('src');
//  if (!path) path = icon.getAttribute('data-src');
//  getIcon(icon, path);
//};


// Sprite method

var sprite;

function httpGet(url) {
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false );
  xmlHttp.send( null );
  return xmlHttp;
}

var sprite = httpGet('go-sprite.svg').responseXML.documentElement;

/*
  function getSprite() {

    console.log(sprite);
    // Probably don't need this for same-origin requests
    //xhr('go-sprite.svg', function(err, resp) {
    //  if(resp) {
    //    var sprite = resp.responseXML.documentElement;
    //    console.log(sprite);
    //    parseSpriteIcons(sprite);
    //  }
    //  if(err) console.log(err);
    //}, true);
  };
*/

//getSprite();

//function parseSpriteIcons(sprite) {
  for (var i = 0; i < spriteIcons.length; i++){
    var icon = spriteIcons[i],
        id = icon.getAttribute('data-id'),
        svg = sprite.getElementById(id).cloneNode(true);
    svg.removeAttribute('transform');
    svg.id = id + '-' + i;

    icon.classList.add('geomicon-' + id);
    console.log(svg);
    injectSvg(icon, svg);
  };
//};

