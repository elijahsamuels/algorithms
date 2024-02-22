/* 
A selection algorithm that efficiently finds the k-th smallest (or largest) element in an unordered list or array. It's similar to the Quicksort algorithm but only focuses on the partitioning step and recurses into one side of the partition based on the position of the pivot.
A hybrid of QuickSort and binary search
*/


const quickSelect = (arr, k) => {
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

  const quickSelectHelper = (arr, low, high, k) => {
    if (low <= high) {
      const pivotIndex = partition(arr, low, high);
      if (pivotIndex === k) {
        return arr[k];
      } else if (pivotIndex < k) {
        return quickSelectHelper(arr, pivotIndex + 1, high, k);
      } else {
        return quickSelectHelper(arr, low, pivotIndex - 1, k);
      }
    }
  };

  return quickSelectHelper(arr, 0, arr.length - 1, k - 1); // k - 1 to convert kth smallest to index
};

// Example usage:
const arr = [3, 1, 4, 2, 5];
const k = 3; // Find the 3rd smallest element
const result = quickSelect(arr, k);
console.log(`The ${k}th smallest element is: ${result}`); // Output: The 3rd smallest element is: 3
