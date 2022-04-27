const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  // throw new NotImplementedError('Not implemented');
  //let arr = ['Olivia', 1111, 'Lily', 'Oscar', true, null]
//let arr = ['Matt', 'Ann', 'Dmitry', 'Max'];
arr.sort();
// console.log(arr);
let a;
let arrNew = [];

for (let i = 0; i < arr.length; i++) {
  // console.log(typeof(arr[i]))
  if (typeof(arr[i]) === 'string') {
    // console.log(arr[i])
  a = arr[i].slice(0,1);
  arrNew += a;
  } else {
   continue;
  }  
}

return arrNew;
}

module.exports = {
  createDreamTeam
};
