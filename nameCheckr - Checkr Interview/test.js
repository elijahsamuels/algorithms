const R = require('ramda');
const LD = require('damerau-levenshtein');
//O(n) where n = length of knownNames

function name_match(knownNames, name) {
  let incomingNameParts = name.split(' ');
  //Reduce the matches to a true or false
  return R.reduce((match, value) => {
      return value === true ? true : match;
    }, false,
    //Map over known names and run comparisons return match status back into a new arr
    R.map((knownName, index) => {
      //console.log("KNOWN", knownName, "INCOMING", name);
      //Exact match
      if (knownName === name) return true;
      //Split strings into word parts
      let knownNameParts = knownName.split(' ');
      //Find common words
      let intersection = R.intersection(incomingNameParts, knownNameParts);
      //If we have a common length between the intersection and the incoming words
      if (knownNameParts.length === intersection.length
        || incomingNameParts.length === intersection.length) return true;
      //If we know we have three parts and the intersection is missing one part
      if (knownNameParts.length == 3 && incomingNameParts.length === 3 && intersection.length === 2) {
        //Compare the first letter of the middle part
        if (R.head(knownNameParts[1]) === R.head(incomingNameParts[1])) return true;
      }
      //Find the difference between the two word arrays so we can look in more detail at why we aren't finding a middle name match
      let difference = R.difference(incomingNameParts, knownNameParts);
      //We know two words match but we have a difference
      if (intersection.length == 2 && difference.length > 0) {
        let matcher = false;
        //For all the known name parts
        knownNameParts.forEach((value) => {
          //Check to see if another part of the name matches the first char of the difference.
          if (R.head(value) === R.head(difference[0])) matcher = true;
        });
        //Return if the matcher is true, other wise we need to consider this Not a match.
        if (matcher) return true;
        else return false;
      }

      if (incomingNameParts.length === knownNameParts.length) {
        let distanceArr = incomingNameParts.map((word, index) => {
          let {steps} = LD(word, knownNameParts[index]);
          return steps;
        });
        let distanceTotal = R.reduce(R.add, 0, distanceArr);
        if (distanceTotal <= incomingNameParts.length &&
          distanceArr.indexOf(2) === -1) return true;
      }

      if (intersection.length < 2) return false;
    }, knownNames)
  );
  console.log(matcheResults);
}

  // let known_names = ["Alphonse Gabriel Capone", "Al Capone"];
  // console.log(name_match(known_names, "Alphonse Gabriel Capone"))
  // console.log(name_match(known_names, "Al Capone"))
  // console.log(name_match(known_names, "Alphonse Francis Capone"))

function test() {
  let known_names = ["Alphonse Gabriel Capone", "Al Capone"];
  if (name_match(known_names, "Alphonse Gabriel Capone") !== true) {
    console.log('error1');
  }
  if (name_match(known_names, "Al Capone") !== true) {
    console.log('error2');
  }
  if (name_match(known_names, "Alphonse Francis Capone") !== false) {
    console.log('error3');
  }

  let known_names1 = ["Alphonse Capone"];
  if (name_match(known_names1, "Alphonse Gabriel Capone") !== true) {
    console.log('error4');
  }
  if (name_match(known_names1, "Alexander Capone") !== false) {
    console.log('error5');
  }

  let known_names2 = ["Alphonse Gabriel Capone"];
  if (name_match(known_names2, "Alphonse Capone") !== true) {
    console.log('error6');
  }

  let known_names3 = ["Alphonse Gabriel Capone", "Alphonse Francis Capone"];
  if (name_match(known_names3, "Alphonse Gabriel Capone") !== true) {
    console.log('error7');
  }
  if (name_match(known_names3, "Alphonse Francis Capone") !== true) {
    console.log('error8');
  }
  if (name_match(known_names3, "Alphonse Edward Capone") !== false) {
    console.log('error9');
  }

  let known_names4 = ["Alphonse Gabriel Capone", "Alphonse F Capone"];
  if (name_match(known_names4, "Alphonse G Capone") !== true) {
    console.log('error10');
  }
  if (name_match(known_names4, "Alphonse Francis Capone") !== true) {
    console.log('error11');
  }
  if (name_match(known_names4, "Alphonse E Capone") !== false) {
    console.log('error12');
  }

  let known_names5 = ["Alphonse Gabriel Capone"];
  if (name_match(known_names5, "Gabriel Alphonse Capone") !== true) {
    console.log('error13');
  }
  if (name_match(known_names5, "Gabriel Capone") !== true) {
    console.log('error14');
  }
  if (name_match(known_names5, "Gabriel A Capone") !== true) {
    console.log('error15');
  }
  if (name_match(known_names5, "Capone Francis Alphonse") !== false) {
    console.log('error16');
  }

  let known_names6 = ["Alphonse Capone"];
  if (name_match(known_names6, "Alphonce Capone") !== true) {
    console.log('error17');
  }
  if (name_match(known_names6, "Alphonce Capome") !== true) {
    console.log('error18');
  }
  if (name_match(known_names6, "Alphons Capon") !== true) {
    console.log('error19');
  }
  if (name_match(known_names6, "Alphosne Capone") !== false) {
    console.log('error20');
  }
  if (name_match(known_names6, "Alfonse Capone") !== false) {
    console.log('error21');
  }
}
test();
