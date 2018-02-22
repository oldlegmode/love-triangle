/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  preferences
    .map(item => item - 1)
    .forEach((item, i, arr) => {
      if (arr[i] !== arr[arr[arr[i]]] && i == arr[arr[arr[i]]]) {
        arr[i] = null;
        arr[arr[i]] = null;
        arr[arr[arr[i]]] = null;
        count++;
      }
    });
  return count;
};
