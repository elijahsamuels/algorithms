/**
@param {string} haystack
@param {string} needle
@return {number}

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:

Input: haystack = "", needle = ""
Output: 0

*/

const strStr = (haystack, needle) => {
  let haystackString = haystack.toString()

console.log("haystack:", haystack, "needle: ", needle)

  if (haystackString.includes(needle)) {
    return haystackString.indexOf(needle)
  }
  if (needle === "" || needle === haystackString) {
      return 0
  }
  return -1

};

function test() {
  let testsRemaining = 0
  var haystack = ["hello"];
  if (strStr(haystack, "ll") !== 2) {
    testsRemaining++
    console.log('error1');
  }

  var haystack = ["aaaaa"];
  if (strStr(haystack, "bba") !== -1) {
    testsRemaining++
    console.log('error2');
  }

  var haystack = [""];
  if (strStr(haystack, "") !== 0) {
    testsRemaining++
    console.log('error3');
  }

  var haystack = ["a"];
  if (strStr(haystack, "a") !== 0) {
    testsRemaining++
    console.log('error4');
  }

  var haystack = ["aaa"];
  if (strStr(haystack, "a") !== 0) {
    testsRemaining++
    console.log('error5');
  }

  if (testsRemaining > 0) {
    console.log(`There are ${testsRemaining} test(s) remaining`)
  } else {
    console.log('Tests complete')
  }
    
}
test();