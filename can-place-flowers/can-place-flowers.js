/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let openSpots = 0;
  const fbCopy = flowerbed.slice();
  for (var i = 0; i < fbCopy.length; i++) {
    //start of array
    if (i === 0) {
      //length === 1
      if (fbCopy.length === 1 && fbCopy[0] === 0) {
        return n <= 1;
      } else if (fbCopy[1] === 0 && fbCopy[0] === 0) {
        openSpots++;
        fbCopy[0] = 1;
      }
    }
    //middle of array
    if (i > 0 && i < fbCopy.length - 1) {
      if (fbCopy[i - 1] === 0 && fbCopy[i] === 0 && fbCopy[i + 1] === 0) {
        openSpots++;
        fbCopy[i] = 1;
      }
    }
    //end of array
    if (i === fbCopy.length - 1 && fbCopy.length > 1) {
      if (fbCopy[i - 1] === 0 && fbCopy[i] === 0) {
        openSpots++;
      }
    }
  }
  return n <= openSpots;
};