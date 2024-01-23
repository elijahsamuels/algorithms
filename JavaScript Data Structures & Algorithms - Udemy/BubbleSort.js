// this should be O(n2)
// compares 2 values: i & j. looks for bigger value. takes the largest value and moves (bubbles) it to the top. iterates through the array until the array is sorted. 
// moves the comparision (a&b) to the end and repeats

const BubbleSort = (array) => {
  if (!array) return undefined;

  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

let x = [1,5,3,7,9,43,2,5]

BubbleSort(x)