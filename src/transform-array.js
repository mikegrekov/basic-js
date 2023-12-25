const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-next') || arr.includes('--double-prev')) {
    let duplicate = [];
    arr.forEach(element => duplicate.push(element));
    let flagChanges = false;
    for (let i = 0; i < duplicate.length; i++) {
      if (duplicate[i] === '--discard-next') {
        if (duplicate[i + 1] != undefined && flagChanges === false) {
          duplicate.splice(i--, 2);
        } else {
          duplicate.splice(i, 1);
        }
        flagChanges = true;
      }
      if (duplicate[i] === '--discard-prev') {
        if (duplicate[i - 1] != undefined && flagChanges === false) {
          duplicate.splice(i - 1, 2);
        } else {
          duplicate.splice(i, 1);
        }
        flagChanges = true;
      }
      if (duplicate[i] === '--double-next') {
        if (duplicate[i + 1] != undefined && flagChanges === false) {
          duplicate.splice(i--, 1, duplicate[i + 2]);
        } else {
          duplicate.splice(i--, 1);
        }
        flagChanges = false;
      }
      if (duplicate[i] === '--double-prev') {
        if (duplicate[i - 1] != undefined && flagChanges === false) {
          duplicate.splice(i--, 1, duplicate[i - 1]);
        } else {
          duplicate.splice(i--, 1);
        }
        flagChanges = false;
      }
    }
    return duplicate;
  } else {
    return arr;
  }
}

module.exports = {
  transform
};
