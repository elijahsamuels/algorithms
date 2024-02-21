function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }
  const pivotIndex = partition(arr, lo, hi);
  qs(arr, lo, pivotIndex - 1);
  qs(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
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

export default function quick_sort(arr: number[]): void {
	qs(arr, 0, arr.length - 1);
}


// export default function quick_sort(arr: number[]): void {
// 	// qs(arr, 0, arr.length - 1);

// 	function quickSort(arr: number[]): number[] {
// 		if (arr.length <= 1) {
// 			return arr;
// 		}
	
// 		// Choosing the pivot (can be any element from the array)
// 		const pivot = arr[Math.floor(arr.length / 2)];
	
// 		// Dividing the array into smaller and greater arrays
// 		const less: number[] = [];
// 		const equal: number[] = [];
// 		const greater: number[] = [];
	
// 		for (let i = 0; i < arr.length; i++) {
// 			if (arr[i] < pivot) {
// 				less.push(arr[i]);
// 			} else if (arr[i] === pivot) {
// 				equal.push(arr[i]);
// 			} else {
// 				greater.push(arr[i]);
// 			}
// 		}
	
// 		// Recursively sorting the smaller and greater arrays
// 		return quickSort(less).concat(equal, quickSort(greater));
// 	}	
// }
