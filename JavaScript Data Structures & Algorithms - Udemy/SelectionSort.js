// this should be O(n2)

// starts at the beginning of the array for the min and compares min to j. j index moves through the array to search for the small value and sets that to min. when min is the smallest value, the swap happens. if min is already the smallest value, nothing is done.

const SelectionSort = (array) => {
  if (!array) return undefined;

  let min;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

let x = [1, 5, 6, 4, 3, 2];

SelectionSort(x)