const namesArray = [
  ["John", "Paul", "George", "Ringo", "Jango"],
  ["Mick", "Keith", "Ronnie", "Charlie"],
  ["Dennis", "Glenn", "Jeff", "Travis"],
];

function nameCheck(name) {
  for (let i = 0; i < namesArray.length; i++) {
    for (let j = 0; j < namesArray[i].length; j++) {
      if (name === namesArray[i][j]) {
        return `We found ${name} in list number ${i+1}!`;
      }
    }
  }
  return `${name} is not in the list`;
}

console.log(nameCheck("Charlie"));
console.log(nameCheck("Jane"));
console.log(nameCheck("John"));
console.log(nameCheck("Jill"));
