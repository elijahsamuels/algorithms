const quickSort = (arr) => {
	
  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap arr[i] and arr[j]
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap arr[i+1] and pivot
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

// Example usage:
const array = [3, 0, 2, 5, -1, 2, 5, -11, 4, 1];
quickSort(array);
console.log(array); // [-1, 0, 1, 2, 3, 4, 5]
