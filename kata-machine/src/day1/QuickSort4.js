const quickSort = (arr) => {
	if (arr.length <= 1) {
			return arr;
	}
	
	const pivot = arr[0];
	const left = [];
	const right = [];

	for (let i = 1; i < arr.length; i++) {
			if (arr[i] < pivot) {
					left.push(arr[i]);
			} else {
					right.push(arr[i]);
			}
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [3, 0, 2, 5, -1, 2, 1002, -11, 4, 1];
console.log(quickSort(array));

/* 
Choice of Pivot: In this implementation, choosing the first element of the array as the pivot (const pivot = arr[0]). If the array is already sorted or nearly sorted, this choice can lead to poor performance, potentially degrading quicksort to O(n^2) time complexity. This is because in the worst case, one partition will contain all elements except the pivot, reducing the problem size by only one element in each recursive call.

Space Complexity: Although quicksort has an average-case time complexity of O(n log n), the space complexity of this implementation is O(n) due to the creation of additional left and right arrays in each recursive call. This could be inefficient for very large arrays or in memory-constrained environments.

Worst-Case Performance: While quicksort typically exhibits excellent performance on average, it can degrade to O(n^2) in the worst-case scenario, particularly with poor pivot choices. This is rare but still a concern in production environments.

 */