const LD = require('damerau-levenshtein');

// 7. Misspellings (threshold: Damerau–Levenshtein distance 1)

const knownAliases = [
  "Alphonse Capone",
]

const nameReturnedOnRecord =[
  "Alphonce Capone",
  "Alphosne Capone",
  "Alfonse Capone",
]

function checkForMisspellings(name, aliases) {
  const nameLD = LD(name, aliases);
  const nameLD1 = LD(name, aliases, 1);
  const nameLD2 = LD(name, aliases, 2);
  const nameLD3 = LD(name, aliases, 3);
}

console.log(LD("Alphonse Capone", "Alfonse bob"))