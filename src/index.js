/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = getLoveTrianglesCount;

console.log('getLoveTrianglesCount([2,3,1]): ', getLoveTrianglesCount([2, 3, 1]));


function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  preferences.forEach((item, i, arr) => {
    if (i + 1 == arr[arr[arr[i] - 2]]) {
      count = count + 1;
    }
  });

  return count;
};
