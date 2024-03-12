const creditCard = 4539689887705798;

const ccValidator = (cc) => {
  const original = cc;
  // step 1
  // remove the last digit. do not alter the original array

  let ccSplitArray = cc.toString().split("");
  const lastDigit = ccSplitArray.pop();

  // step 2
  // reverse the array (not including the already removed last digit)
  ccSplitArray.reverse();

  for (let i = 0; i < ccSplitArray.length; i++) {
    ccSplitArray[i] = parseInt(ccSplitArray[i]);

    // step 3
    // multiple the odd digits by 2 (index 1,3,5, etc...)
    if (i % 2 !== 1) {
      ccSplitArray[i] = ccSplitArray[i] * 2;
    }
    // step 4
    // subtract 9 from numbers larger than 10
    if (ccSplitArray[i] >= 10) {
      ccSplitArray[i] = ccSplitArray[i] - 9;
    }
  }

  // step 5
  // sum this subarray
  const ccSum = ccSplitArray.reduce((acc, curr) => (acc += curr), 0);

  // step 6
  // sum subarray and the removed digit from earlier
  // if the sum module 10 === 0, cc is valid
  const finalValue = ccSum + parseInt(lastDigit);
  const x =
    finalValue % 10 === 0
      ? `${original} is valid!`
      : `${original} is NOT valid!`;
  console.log("answer:", x);
  return x;
};

ccValidator(creditCard);
