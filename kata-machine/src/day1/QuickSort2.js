function qs(arr, lo, hi) {
  if (lo >= hi) {
    return;
  }
  const pivotIndex = partition(arr, lo, hi);
  qs(arr, lo, pivotIndex - 1);
  qs(arr, pivotIndex + 1, hi);
}

function partition(arr, lo, hi) {
  const pivot = arr[hi];

  let index = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      index++;
      const temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  index++;
  arr[hi] = arr[index];
  arr[index] = pivot;

  return index;
}

function quick_sort(arr) {
  qs(arr, 0, arr.length - 1);
}

const arr = [5, 4, 2, 8, 6, 7, 9, 0, 3, 1];

console.log(quick_sort(arr));


// 
// 
// 
// 
// ANOTHER OPTION

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
