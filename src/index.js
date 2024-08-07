
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.reduce((acc, arr, i) => {
    return i % 2 === 0 ? acc.concat(arr) : acc.concat(arr.reverse());
  }, []);
}
