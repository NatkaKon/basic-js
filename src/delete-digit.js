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
function deleteDigit(arr) {

arr = [...num+''] 
//console.log(arr)
let arr2 = [...num+''].map(n=>+n) 
//console.log(arr2)
  
let min = arr2.length ? arr2[0] : 0 ;
for (let i=0; i < arr2.length; i++ ) {
  //min = arr2[i];
 
   if (arr2[i] < min) {
     min = arr2[i];
   }
 
}
  return min;
}

module.exports = {
  deleteDigit
};
