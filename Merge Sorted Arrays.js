// Merge Sorted Arrays

/*
In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

*/


const myArray = [1, 3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
const list1 = [1,2,4]
const list2 = [1,3,4]
const list3 = []
const list4 = []

function mergeArrays(arr1, arr2){
  
  let finalArray = []
  while ((arr1.length > 0) && (arr2.length > 0)){
    if (arr1[0] <= arr2[0]) {
      finalArray.push(arr1.shift())
    } else if (arr1[0] > arr2[0]) {
      finalArray.push(arr2.shift())
    }
  }

  return finalArray
}

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
