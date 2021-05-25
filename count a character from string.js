{
    /*


    count the occurrences of a given character in a string


*/
}

charCounter = (string, character) => {
    let stringArray = string.split("");
    let len = stringArray.length;
    let charTotal = 0;

    for (let i = 0; i < len; i++) {
        if (character == stringArray[i]) {
            charTotal += 1;
        }
    }

    return charTotal;
};

charCounter("strings", "s"); //?
