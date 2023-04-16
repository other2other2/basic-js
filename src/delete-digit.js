const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  console.log(String(n).length);
  for (let i = 0; i < String(n).length; i += 1) {
    let temp = String(n).split('');
    temp[i] = ''
    arr.push(temp.join(''))
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
