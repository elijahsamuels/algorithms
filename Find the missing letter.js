// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

let array1 = ["a", "b", "c", "d", "f"];
let array2 = ["N", "O", "Q", "R", "S"];
const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

findMissingLetter = (array) => {
    let newArray = array.map((letter) => letter.toLowerCase()); //?
    let letter = alphabet.find((letter) => letter === newArray[0]); //?

    for (let i = 0; i < array.length; i++) {
        if (letter === newArray[i]) {
            i++;
        } else {
            // console.log(alphabet.indexOf(letter))
            return alphabet[alphabet.indexOf(letter) + 1]; //?
        }
    }
};

console.log(findMissingLetter(array1));
console.log(findMissingLetter(array2));

// if (letter === newArray[0]) {
//     console.log(letter.indexOf++)
// } else {
//     return (alphabet.indexOf()+1).valueOf()
// }

// if newArray[letter] === alphabet[indexB]
// then letter++ && indexB++
// else return valueOf indexB + 1

// findMissingLetter = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         indexedLetter = alphabet.indexOf(array[i].toLowerCase()) + 1;

//         if (array[0] === array[0].toUpperCase()) {
//             if (alphabet[indexedLetter].toUpperCase() !== array[i + 1]) {
//                 return alphabet[indexedLetter].toUpperCase();
//             }
//         } else if (alphabet[indexedLetter] !== array[i + 1]) {
//             return alphabet[indexedLetter].toLowerCase();
//         }
//     }
// };


// WAAAAY better solution. Good lord...

findMissingLetter = (array) => {
    let i = array[0].charCodeAt();
    array.map((x) => (x.charCodeAt() == i ? i++ : i));
    return String.fromCharCode(i);
}

console.log(findMissingLetter(array1));
console.log(findMissingLetter(array2));
