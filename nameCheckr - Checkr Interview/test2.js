const levenshtein = require("fast-levenshtein");

const names_on_record_1 = ["Alphonse Gabriel Capone", "Al Capone"];
const names_on_record_2 = ["Alphonse Gabriel Capone", "Alexander Capone"];
const names_on_record_3 = ["Alphonse Capone", "Al Capone"];
const names_on_record_4 = [
  "Alphonse Gabriel Capone",
  "Alphonse Francis Capone",
  "Alphonse Edward Capone",
];
const names_on_record_5 = [
  "Alphonse G Capone",
  "Alphonse Francis Capone",
  "Alphonse E Capone",
];
const names_on_record_6 = [
  "Gabriel Alphonse Capone",
  "Gabriel Capone",
  "Capone Francis Alphonse",
];
const names_on_record_7 = [
  "Alphonce Capone",
  "Alphose Capone",
  "Alfonse Capone",
];

function name_match(namesOnRecord, aliasName) {
  let aliasNameSplit = aliasName.split(" ");

  namesOnRecord.map((nameFromRecord, index) => {
    let nameFromRecordSplit = nameFromRecord.split(" ");
    // 1. check for exact match
    // if (nameFromRecord === aliasName) {
    //   console.log(`${nameFromRecord} (postive)`)
    //   return true;
    // }

    // 2. check if missing middle name, but record has middle name.
    // 3. check if known middle name, but record is missing middle name.

    // if (nameFromRecordSplit[0] === aliasNameSplit[0] &&
    //   nameFromRecordSplit[nameFromRecordSplit.length-1] === aliasNameSplit[aliasNameSplit.length-1]) {
    //     console.log(`${nameFromRecord} (postive)`)
    //     return true;
    //   }

    // 4. check if multiple middle names.

    // if (nameFromRecordSplit[0] === aliasNameSplit[0] &&
    //   nameFromRecordSplit[nameFromRecordSplit.length-1] === aliasNameSplit[aliasNameSplit.length-1] &&
    //   nameFromRecordSplit[1] === aliasNameSplit[1]) {
    //     console.log(`${nameFromRecord} (postive)`)
    //     return true;
    //   }

    // 5. check if middle name and/or middle initial match

    //     if (nameFromRecordSplit[0] === aliasNameSplit[0] &&
    // nameFromRecordSplit[nameFromRecordSplit.length-1] === aliasNameSplit[aliasNameSplit.length-1] &&
    // nameFromRecordSplit[1].substring(0,1) === aliasNameSplit[1].substring(0,1)) {
    //   console.log(`${nameFromRecord} (postive)`)
    //   return true;
    // }

    // 6. Name transposition
    // if name on record has names that are not part of the alias name, return false

    // for (let i = 0; i < nameFromRecordSplit.length; i++) {
    //   // console.log(nameFromRecordSplit[i])
    //   if (aliasName.includes(nameFromRecordSplit[i]) && nameFromRecordSplit.length === aliasNameSplit.length) {
    //     console.log(`${nameFromRecord} (positive)`)
    //     return true //`${aliasName} (positive)`
    //   }
    // }

    // 7. Misspellings 
    // Levenshtein Distance for name transposition

    // console.log(`${nameFromRecord}`);
    if (levenshtein.get(nameFromRecord, aliasName) < 2) {
      console.log(`${nameFromRecord} (positive)`);
      return true;
    }
  });
}

// console.log(name_match(names_on_record_1, "Alphonse Gabriel Capone"))
// console.log(name_match(names_on_record_2, "Alphonse Capone"))
// console.log(name_match(names_on_record_4, "Alphonse Gabriel Capone"))
// console.log(name_match(names_on_record_4, "Alphonse Francis Capone"))
// console.log(name_match(names_on_record_5, "Alphonse Gabriel Capone"))
// console.log(name_match(names_on_record_5, "Alphonse F Capone"))
// console.log(name_match(names_on_record_6, "Alphonse Gabriel Capone"))
console.log(name_match(names_on_record_7, "Alphonse Capone"));

// console.log(levenshtein.get("Alphosne Capone", "Alphonse Capone"))