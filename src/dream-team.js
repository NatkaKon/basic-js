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
function createDreamTeam(member) {
 
let memberArr = [];
let memberString = '';

if (Array.isArray(member) && member.length > 0) {
  for (let i = 0; i < member.length; i++) {
      if (typeof(member[i]) == 'string' && typeof(member[i].trim()[0]) == 'string') {
      memberArr.push(member[i].trim()[0].toUpperCase())
      }
  };
    memberString = memberArr.sort().join('');
  if (memberArr.length > 0) {
      return memberString;
      } else {
      return false;
      }
  } else {
  return false;
  }
}

module.exports = {
  createDreamTeam
};
