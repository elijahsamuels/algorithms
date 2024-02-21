/**
 * 190. Reverse Bits
 * https://leetcode.com/problems/reverse-bits/description/
 *
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

var reverseBits = function(n) {
  var result = 0;
  var count = 32;

  while (count--) {
    console.log('count', count)
    result *= 2;
    console.log('result1', result)
    result += n & 1;
    console.log('result2', result)
    n = n >> 1;
    console.log('n', n)
  }
  console.log(result)
  return result;
};

// input: 00000010100101000001111010011100
// output: 964176192 (00111001011110000010100101000000)

// count 31
// result1 0
// result2 0
// n 21630798
// count 30
// result1 0
// result2 0
// n 10815399
// count 29
// result1 0
// result2 1
// n 5407699
// count 28
// result1 2
// result2 3
// n 2703849
// count 27
// result1 6
// result2 7
// n 1351924
// count 26
// result1 14
// result2 14
// n 675962
// count 25
// result1 28
// result2 28
// n 337981
// count 24
// result1 56
// result2 57
// n 168990
// count 23
// result1 114
// result2 114
// n 84495
// count 22
// result1 228
// result2 229
// n 42247
// count 21
// result1 458
// result2 459
// n 21123
// count 20
// result1 918
// result2 919
// n 10561
// count 19
// result1 1838
// result2 1839
// n 5280
// count 18
// result1 3678
// result2 3678
// n 2640
// count 17
// result1 7356
// result2 7356
// n 1320
// count 16
// result1 14712
// result2 14712
// n 660
// count 15
// result1 29424
// result2 29424
// n 330
// count 14
// result1 58848
// result2 58848
// n 165
// count 13
// result1 117696
// result2 117697
// n 82
// count 12
// result1 235394
// result2 235394
// n 41
// count 11
// result1 470788
// result2 470789
// n 20
// count 10
// result1 941578
// result2 941578
// n 10
// count 9
// result1 1883156
// result2 1883156
// n 5
// count 8
// result1 3766312
// result2 3766313
// n 2
// count 7
// result1 7532626
// result2 7532626
// n 1
// count 6
// result1 15065252
// result2 15065253
// n 0
// count 5
// result1 30130506
// result2 30130506
// n 0
// count 4
// result1 60261012
// result2 60261012
// n 0
// count 3
// result1 120522024
// result2 120522024
// n 0
// count 2
// result1 241044048
// result2 241044048
// n 0
// count 1
// result1 482088096
// result2 482088096
// n 0
// count 0
// result1 964176192
// result2 964176192
// n 0
// 964176192

