/**
 * sorts 2 arrays by comparing a value from each array and pushing the smallest value into a new array.
 * @param {Array} array1 
 * @param {Array} array2 
 * @returns {Array} a sorted array
 */
const merge = (array1, array2) => {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      sortedArray.push(array1[i]);
      i++;
    } else {
      sortedArray.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    sortedArray.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    sortedArray.push(array2[j]);
    j++;
  }
  return sortedArray;
};

/**
 * Takes an array, and recursively splits it in half until are only single values are in a bunch of arrays. This then calls merge() on each single value array, and merges back by comparing left and right.
 * Space Complexity: O(n)
 * Time Complexity: O(n log n)
 * @param {Array} array 
 * @returns sorted array
 */
const mergeSort = (array) => {
  if (array.length === 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

let x = [1, 5, 3, 6, 2, 4, 7];

mergeSort(x);