// given an array of numbers
// there is only one duplicated number
// return the duplicate number

// sample [1,2,3,4,5,6,7,8,9,5]

// findDup = (array) => {
//     // return [...new Set(array)]
//     return array.filter((a,b) => a === b ? !a : b).filter((a,b) => a === b ? a : !b)

// }

// // find and return ONE duplicated number
// findDup = (array) => {
//     let obj = {};
//     let len = array.length;

//     for (let i = 0; i < len; i++) {
//         if (!obj[array[i]]) {
//             obj[array[i]]=1
//         }
//         else {
//             return array[i]
//         }
//     }
// };

// findDup([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9]) //?

// find and return multiple duplicated numbers
findDup = (array) => {
    let dupes = [];
    let obj = {};
    let len = array.length;

    for (let i = 0; i < len; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = 1;
        } else {
            dupes.push(array[i]);
        }
    }
    return dupes;
}

console.log(findDup([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9]));
