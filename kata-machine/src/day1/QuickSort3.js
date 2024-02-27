const quickSort = (arr) => {

  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
				console.log('arr[i]:', arr[i]);
				console.log('arr[j]:', arr[j]);

				// Swap arr[i] and arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
				console.log('after swap arr:', arr);
      }
    }

    // Swap arr[i+1] and pivot
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1; // Return the partition index
  };

  const quickSortHelper = (arr, low, high) => {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSortHelper(arr, low, pivotIndex - 1);
      quickSortHelper(arr, pivotIndex + 1, high);
    }
  };

  quickSortHelper(arr, 0, arr.length - 1);
};

// Example:
const array = [3, 0, 2, 5, -1, 2, -11, 4, 1];
quickSort(array);
console.log(array); 

/* 
[3, 0, 2, 5, -1, 2, -11, 4, 1];
[0, 3, 2, 5, -1, 2, -11, 4, 1];


*/
