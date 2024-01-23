  // 2. Middle name unknown match (alias list)

  // Known aliases
  //   Alphonse Capone

  // Name returned on record
  //   Alphonse Gabriel Capone (positive)
  //   Alexander Capone (negative)

const checkForMiddleNameAliasList = (name, aliasList) => {
  let positiveNames = []
  let negativeNames = []

  for (let i = 0; i < aliasList.length; i++) {
    let splitAliasName = aliasList[i].split(" ");
    let firstNameFromAliasName = splitAliasName[0];
    let lastNameFromAliasName = splitAliasName[splitAliasName.length-1];
    
    if (`${firstNameFromAliasName} ${lastNameFromAliasName}` === name) {
      positiveNames.push(aliasList[i])
    } else if ((`${firstNameFromAliasName} ${lastNameFromAliasName}` !== name))
      negativeNames.push(aliasList[i])
    }
  return {positiveNames: positiveNames, negativeNames: negativeNames}
}

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
    'Alexander Capone',
  ]

console.log(checkForMiddleNameAliasList("Alphonse Capone", namesArray)) // positive
// console.log(checkForMiddleNameAliasList("Al Capone", namesArray)) // negative