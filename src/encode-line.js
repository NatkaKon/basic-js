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
 //let s = 'aaaatttt';
let arr = [...str]
//var arr = ["2","1","2","2","3","4","3","3","3","5"];
let k = {};
let arrNew;
//push into hashtable
for(let i in arr){
 k[arr[i]]=(k[arr[i]]||0)+1; //increments count if element already exists
}

//result
for(let j in k) {
 arrNew.push(k[j]+j);
}
  let newString = arrNew.join('');
  return newString;
}

module.exports = {
  encodeLine
};
