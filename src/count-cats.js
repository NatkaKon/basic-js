const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  // throw new NotImplementedError('Not implemented');
  //let arr = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ];
  let count = 0;
  for (let i =0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
        // console.log(arr[i][k]);
      if (arr[i][k] == '^^' ) {
        count++;
      }
    }
    
}
return count;
}

module.exports = {
  countCats
};
