/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var string = x.toString();
    var isNegative = string[0] === '-';
    if (isNegative) {
      string = string.slice(1);
    }
    string = Number(string.split('').reverse().join(''));
    var result;
    if (isNegative) {
      result =  -1 * string;
    } else {
      result = string
    }
    if (result < -2147483648 || result > 2147483647) {
        return 0;
  } else {
return result}
};