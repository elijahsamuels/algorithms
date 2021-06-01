/*

write a function that does the javascript equivalent of .includes(character)
"banana".includes("a")
// true		 

*/

stringIncludes = (word, letter) => {
    let matches;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
			matches = true;
        }
    }
    return !!matches;
};

stringIncludes("banana", "a"); // true
stringIncludes("banana", "d"); // false
