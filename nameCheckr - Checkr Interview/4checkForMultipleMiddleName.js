  // 4. Multiple middle name aliases

  // Known aliases
  //   Alphonse Gabriel Capone
  //   Alphonse Francis Capone


  // Name returned on record
  //   Alphonse Gabriel Capone (positive)
  //   Alphonse Francis Capone (positive)
  //   Alphonse Edward Capone (negative)

const knownAliases = [
    "Alphonse Gabriel Capone",
    "Alphonse Francis Capone",
]

const namesOnRecord = [
  "Alphonse Gabriel Capone",
  "Alphonse Francis Capone",
  "Alphonse Edward Capone",
  "Alphonse Frankie Capone",
  "Alphonse Captain Capone",
];

function checkForMultipleMiddleName(namesOnRecordArray, aliasNamesArray) {
  let positiveNames = []
  let negativeNames = []

  for (let i = 0; i < namesOnRecordArray.length; i++) {
    let splitNameFromNamesOnRecordArray = namesOnRecordArray[i].split(" ")

    for (let j = 0; j < aliasNamesArray.length; j++) {
      let splitNameFromAliasArray = aliasNamesArray[j].split(" ")
      // console.log(splitNameFromAliasArray)

        if (splitNameFromNamesOnRecordArray[1] === splitNameFromAliasArray[1]) {
          positiveNames.push(namesOnRecordArray[i])
          j++
        } else if (splitNameFromNamesOnRecordArray[1] !== splitNameFromAliasArray[1]) {
          negativeNames.push(namesOnRecordArray[i])

          }
        }
    }
  return {positiveNames: positiveNames, negativeNames: negativeNames}
}

// console.log(checkForMultipleMiddleName(namesOnRecord, "Alphonse Gabriel Capone"))
// console.log(checkForMultipleMiddleName(namesOnRecord, "Alphonse Francis Capone"))
console.log(checkForMultipleMiddleName(namesOnRecord, knownAliases))
// console.log(checkForMultipleMiddleName(namesOnRecord, "Jane"))
// console.log(checkForMultipleMiddleName(namesOnRecord, "Jeff"))
// console.log(checkForMultipleMiddleName(namesOnRecord, "Jill"))



// function checkForMultipleMiddleName(namesOnRecord, aliasNames) {
//   let aliasNamesArray = aliasNames.split(" ")
//   let aliasNamesFirstName = aliasNamesArray[0];
//   let aliasNamesMiddleName = aliasNamesArray[1];
//   let aliasNamesLastName = aliasNamesArray[aliasNamesArray.length-1];

// }


// for (let i = 0; i < namesOnRecord.length; i++) {
//   for (let j = 0; j < namesOnRecord[i].length; j++) {
//     let nameFromRecordsArray = namesOnRecord[i].split(" ")
//     let nameFromRecordsArrayFirstName = nameFromRecordsArray[0]
//     let nameFromRecordsArrayMiddleName = nameFromRecordsArray[1]
//     let nameFromRecordsArrayLastName = nameFromRecordsArray[nameFromRecordsArray.length-1]

//     if (nameFromRecordsArray[i][j].includes(aliasNamesFirstName && aliasNamesLastName && aliasNamesMiddleName)) {
//       return `${aliasNames} was found`
//     }
//   }
// }
// return `${aliasNames} was not found`