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
  let arr = n.toString().split('');
  let maxarr = arr.map((item, index) => {
    return parseInt(arr.map((subitem, subindex) => {
      if (subindex !== index) return subitem
    }).join(''))
  }); 
  return Math.max(...maxarr)
}

module.exports = {
  deleteDigit
};

