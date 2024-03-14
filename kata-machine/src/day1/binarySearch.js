const binarySearch = (arr, target) => {
  let high = arr.length - 1 ;
  let low = 0;
	
  while (low <= high) {
		let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      high = mid - 1;;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    }
  }
	return 'not found';
};

const array = [-1, 0, 1, 2, 3, 4, 5, 6, 7];

binarySearch(array, 14);
binarySearch(array, -1);
binarySearch(array, 4);
binarySearch(array, 7);
binarySearch(array, -20);