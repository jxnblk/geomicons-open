
var paths = require('./paths');

module.exports = function(key) {
  var iconList = Object.keys(paths);
  iconList = iconList.join();
  console.error(
    'No icon found for ' + key + '.\n' +
    'Geomicons Open includes the following icons: \n' + iconList
  );
};

