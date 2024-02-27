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

