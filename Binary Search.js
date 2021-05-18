{
    /*
Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to find if the target number is contained in the array and should return its index if it is, otherwise -1.

# Add, edit, or remove tests in this file.
# Treat it as your playground!

import program
import unittest

class TestProgram(unittest.TestCase):
    def test_case_1(self):
        self.assertEqual(program.binarySearch([1, 5, 23, 111], 111), 3)

    def test_case_2(self):
        self.assertEqual(program.binarySearch([1, 5, 23, 111], 5), 1)

    def test_case_3(self):
        self.assertEqual(program.binarySearch([1, 5, 23, 111], 35), -1)

    def test_case_4(self):
        self.assertEqual(
            program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33), 3
        )

    def test_case_5(self):
        self.assertEqual(
            program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 72), 8
        )

    def test_case_6(self):
        self.assertEqual(
            program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73), 9
        )

    def test_case_7(self):
        self.assertEqual(
            program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 70), -1
        )

    def test_case_8(self):
        self.assertEqual(
            program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 355), 10
        )

    def test_case_9(self):
        self.assertEqual(
            program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 354), -1
        )

if __name__ == "__main__":
    unittest.main()

*/
}

// initial answer: Time = O(n)
// binarySearch = (array, targetNumber) => {
//     if (array.includes(targetNumber)) {
//         return array.indexOf(targetNumber);
//     }
//     return -1;
// };

// Binary Search: Time = O(log(n)), Space = O(1)
// should be implemented iteratively, avoid recursively

// Note: the array MUST be sorted!

binarySearch = (array, targetNumber) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (array[middle] === targetNumber) return array.indexOf(targetNumber);
        else if (array[middle] < targetNumber) left = middle + 1;
        else right = middle - 1;
    }

    return -1; // if value is not found
};

console.log(binarySearch([1, 5, 23, 111], 111), 3);
console.log(binarySearch([1, 5, 23, 111], 5), 1);
console.log(binarySearch([1, 5, 23, 111], 35), -1);
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33), 3);
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 72), 8);
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73), 9);
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 355), 10);
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 354), -1);

{/*
binarySearch = (array, targetNumber) => {
    let left = 0;
    let right = array.length - 1;

    // Iterate while left not meets right
    while (left <= right) {
        // Find the mid index
        let middle = Math.floor((left + right) / 2);

        // If element is present at middle, return True
        if (array[middle] === targetNumber) return array.indexOf(targetNumber);
        // Else look in left or right half accordingly
        else if (array[middle] < targetNumber) left = middle + 1;
        else right = middle - 1;
    }

    return -1;
};

*/}

