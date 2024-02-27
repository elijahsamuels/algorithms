function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Choosing the pivot (can be any element from the array)
  const pivot = arr[Math.floor(arr.length / 2)];

  // Dividing the array into smaller and greater arrays
  const less = [];
  const equal = [];
  const greater = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			less.push(arr[i]);
		} else if (arr[i] === pivot) {
			equal.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}

  // Recursively sorting the smaller and greater arrays
  return quickSort(less).concat(equal, quickSort(greater));
}

// Example usage:
const array = [5, 1, 7, 9, 8, 3, 6, 2, 0];
const sortedArray = quickSort(array);
console.log(sortedArray);
