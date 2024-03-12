const binarySearch = (arr, target) => {
  let high = arr.length;
  let low = 0;
  let middle = Math.floor((low + high) / 2);

  while (low < high) {
    if (arr[middle] === target) {
      return middle;
    }
    if (arr[middle] > target) {
      high = middle;
    }
    if (arr[middle] < target) {
      low = middle;
    }
		return false;
  }
};

const array = [1, 2, 3, 4, 5, 6, 7];

binarySearch(array, 14);
binarySearch(array, -4);
binarySearch(array, 4);
