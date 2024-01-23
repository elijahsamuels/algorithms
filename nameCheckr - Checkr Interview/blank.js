const romansToIntegers = {
  "M": 1000,
  "D": 500,
  "C": 100,
  "L": 50,
  "X": 10,
  "V": 5,
  "I": 1,
}

const romansConverter = (romanNumeralString) => {
  // var romanToInt = function(romanNumeralString) {

  let romanNumeralSplitArray = romanNumeralString.split("");
  let total = 0;

  for (let i = 0; i < romanNumeralSplitArray.length; i++) {
    let current = romanNumeralSplitArray[i]
    let currentValue = romansToIntegers[current]

    let next = romanNumeralSplitArray[i+1]
    let nextValue = romansToIntegers[next]

    if (currentValue < nextValue) {
      total -= currentValue
    } else {
      total += currentValue
    }

  }
  return total
}

console.log(romansConverter("V"))
console.log(romansConverter("VII"))
console.log(romansConverter("M"))
console.log(romansConverter("MMXXII"))