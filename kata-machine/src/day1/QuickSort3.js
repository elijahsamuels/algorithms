/* 
- average and best-case time complexity of quicksort is O(n log n)
- worst-case scenario, time complexity can degrade to O(n^2)
*/

const quickSort = (arr) => {

  const partition = (arr, low, high) => {
    const pivot = arr[high]; // the pivot value isn't 100% necessary
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) { //you CAN compare the arr[j] <= arr[high]
        i++;
				
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

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

const array = [3, 0, 2, -1, 1];
quickSort(array);
console.log(array); 
