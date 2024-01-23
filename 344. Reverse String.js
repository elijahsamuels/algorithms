/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Write a function that reverses a string. The input string is given as an array of characters s. 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.

Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

 */
 var reverseString = function(string) {
    string.reverse() // So passes in Leetcode, but let's pretend they actually want code.

  // let left = 0;
  // let right = string.length - 1
  // while (left < right) {
  //   let temp = string[left]
  //   string[left] = string[right]
  //   string[right] = temp
  //   left++
  //   right--
  // }
  // return string

};



function test() {

  let testsRemaining = 0

  var string = ["h","e","l","l","o"];
  if (reverseString(string) !== ["o","l","l","e","h"]) {
    testsRemaining++
    console.log('\x1b[33m%s\x1b[0m', 'error1');
  }
  
  var string = ["H","a","n","n","a","h"];
  if (reverseString(string) !== ["h","a","n","n","a","H"]) {
    testsRemaining++
    console.log('\x1b[33m%s\x1b[0m', 'error2');
  }

  // var string = "abcabcabcabc";
  // if (reverseString(string) !== true) {
  //   testsRemaining++
  //   console.log('\x1b[33m%s\x1b[0m', 'error3');
  // }

  if (testsRemaining > 0) {
    console.log('\x1b[31m%s\x1b[0m', `There are ${testsRemaining} test(s) remaining`)
  } else {
    console.log('\x1b[32m%s\x1b[0m', 'Tests complete')
  }
    
}
test();
