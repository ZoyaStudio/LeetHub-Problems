/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    var count = 0;
    var hasFoundFirstLetter = false;
    for (var i = s.length -1; i>=0; i--) {
      if (s[i] !== ' ') {
        hasFoundFirstLetter = true;
        count++;
      }
      if (s[i] === ' ' && hasFoundFirstLetter) {
        return count;
      }
    }
    return count;
};