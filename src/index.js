'use strict';

var nonspacing = new Set(require('unicode-tables/category/Mn'));

function removeAccents(string) {
  var decomposed = string.normalize("NFD");
  var runes = decomposed.split('');
  var cleaned = runes.map(function (r) {
    var charCode = r.charCodeAt(0);
    // Drop non-spacing chars.
    if (nonspacing.has(charCode)) {
      return;
    }
    // Keep all other chars.
    return r;
  });
  var composed = cleaned.join('').normalize("NFC");
  return composed;
}

module.exports = removeAccents;