/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  console.log(x.toString().split('').reverse().join(''))
  return x.toString() === x.toString().split('').reverse().join('');
};