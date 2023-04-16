const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');

  s1.forEach(el1 => {
    s2[s2.findIndex(el2 => el2 == el1)] = '';
  });

  return s2.reduce((acc, item) => (item === '') ? acc += 1 : acc, 0)
}

module.exports = {
  getCommonCharacterCount
};
