  // 3. Middle name unknown match (criminal record)

  // Known aliases
  //   Alphonse Gabriel Capone

  // Name returned on record
  //   Alphonse Capone (positive)

    const namesArray = [
  "Alphonse Gabriel Capone",
  "Alphonse Francis Capone",
  "Alphonse Edward Capone",
  "Alphonse Frankie Capone",
  "Alphonse Captain Capone",
];

// function nameCheck(namesArray, nameToCheckFor) {
//   for (let i = 0; i < namesArray.length; i++) {
//     if (namesArray[i].includes(nameToCheckFor)) {
//       return `${nameToCheckFor} was found`
//     }
//   }
//   return `${nameToCheckFor} was not found`
// }

function nameCheck(namesArray, nameToCheckFor) {
  let nameToCheckForArray = nameToCheckFor.split(" ")
  let nameToCheckForFirstName = nameToCheckForArray[0];
  let nameToCheckForLastName = nameToCheckForArray[nameToCheckForArray.length-1];

  for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i].includes(nameToCheckForFirstName && nameToCheckForLastName)) {
      return `${nameToCheckFor} was found`
    }
  }
  return `${nameToCheckFor} was not found`
}

console.log(nameCheck(namesArray, "Alphonse Gabriel Capone"))
console.log(nameCheck(namesArray, "Alphonse Capone"))
console.log(nameCheck(namesArray, "Alphonse Callie"))
console.log(nameCheck(namesArray, "Jane"))
console.log(nameCheck(namesArray, "Jeff"))
console.log(nameCheck(namesArray, "Jill"))
