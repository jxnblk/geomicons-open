
var assert = require('assert');
var geomicons = require('..');

describe('geomicons', function() {

  it('should return a string for paths', function() {
    var icon = geomicons.paths.bookmark;
    assert.equal(typeof icon, 'string');
  });

});

