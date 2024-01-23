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
  'Travis'
]

function initialCheck(name) {
  
  const firstLetter = (name) => name.charAt(0)

  for (let i = 0; i < namesArray.length; i++) {
    if (firstLetter(name) === firstLetter(namesArray[i])) {
      return `We found ${name}'s initial ${firstLetter(name)} !`;
    }
  }
  return `${name}'s inital was not found'`;
}

console.log(initialCheck("Charlie"))
console.log(initialCheck("Jane"))
console.log(initialCheck("Jeff"))
console.log(initialCheck("Zelda"))
console.log(initialCheck("Jill"))