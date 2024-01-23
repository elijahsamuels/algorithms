// BIG O
// best case for time complexity: O(n log n) - if it's sorted, and the lower numbers are already on the left, the divide technique won't actually happen
// worst case for time complexity: O(n^2)
// space complexity is O(1) since we aren't creating new arrays and swaping in place

const swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
}

const QuickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    QuickSort(array, left, pivotIndex - 1);
    QuickSort(array, pivotIndex + 1, right);
  }
  return array;
};

let x = [4, 7, 1, 3, 6, 2, 5];
QuickSort(x);
