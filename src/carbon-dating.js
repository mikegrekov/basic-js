const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const re = /^[0-9]+\.*[0-9]*/gm;

  if (typeof +sampleActivity !== 'number'
    || +sampleActivity < 1
    || +sampleActivity > 15
    || typeof sampleActivity !== 'string'
    || sampleActivity.match(re) === null) return false;
  const n = +sampleActivity;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / n) / k;
  return Math.ceil(t);
}

module.exports = {
  dateSample
};



// console.log(dateSample('3'), 13305);
// console.log(dateSample('1'), 22387);
// console.log(dateSample('9'), 4223);
// console.log(dateSample('11'), 2564);