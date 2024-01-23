const namesArray = [
  'John',
  'Paul',
  'George',
  'Ringo',
  'Jango',
  'Mick',
  'Keith',
  'Ronnie',
  'Charlie',
  'Dennis',
  'Glenn',
  'Jeff',
  'Travis',
  'Alphonse Gabriel Capone',
  'Al Capone',
  'Alphonse Francis Capone',
]

function nameCheck(name) {
  for (let i = 0; i < namesArray.length; i++) {
    if (name === namesArray[i]) {
      return `We found ${name}!`;
    }
  }
  return `${name} is not in the list`;
}

console.log(nameCheck("Charlie"))
console.log(nameCheck("Jane"))
console.log(nameCheck("Jeff"))
console.log(nameCheck("Jill"))
console.log(nameCheck("Alphonse Gabriel Capone"))
console.log(nameCheck("Al Capone"))