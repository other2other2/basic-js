const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';
  for (let i = 1; i <= str.length; i += 1) {
    console.log(str[i]);
    if (str[i - 1] == str[i]) {
      count += 1;
    } else {
      result += count > 1 ? count : '';
      result += str[i - 1];
      count = 1;
    }
  }
  return result
}

module.exports = {
  encodeLine
};
