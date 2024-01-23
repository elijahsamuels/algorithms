// 459. Repeated Substring Pattern
/**

Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. 

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:

Input: s = "aba"
Output: false

Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

* @param {string} s
* @return {boolean}

 */
 var repeatedSubstringPattern = function(s) {
   for (let i = 0; i < s.length; i++) {
    let splitString = s.split('')
    let letter = splitString[i]
    let substring
    // if 

    console.log(sub)
    true
  }
// if 
};


function test() {

  let testsRemaining = 0

  var s = "abab";
  if (repeatedSubstringPattern(s) !== true) {
    testsRemaining++
    console.log('\x1b[33m%s\x1b[0m', 'error1');
  }

  var s = "aba";
  if (repeatedSubstringPattern(s) !== false) {
    testsRemaining++
    console.log('\x1b[33m%s\x1b[0m', 'error2');
  }

  var s = "abcabcabcabc";
  if (repeatedSubstringPattern(s) !== true) {
    testsRemaining++
    console.log('\x1b[33m%s\x1b[0m', 'error3');
  }

  if (testsRemaining > 0) {
    console.log('\x1b[31m%s\x1b[0m', `There are ${testsRemaining} test(s) remaining`)
  } else {
    console.log('\x1b[32m%s\x1b[0m', 'Tests complete')
  }
    
}
test();
