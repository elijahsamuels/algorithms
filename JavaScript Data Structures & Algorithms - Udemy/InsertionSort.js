// this should be O(n2)
// good if dealing with an almost sorted array

// starts at array[1] (temp), second value, and compares to the left. if temp is less than the left value, it moves temp to the left until the left value is temp is greater than the left value.

const InsertionSort = (array) => {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (var j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

let x = [1, 5, 6, 3, 4, 2];

InsertionSort(x)