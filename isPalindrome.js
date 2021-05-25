{
    /*

check to see if the string is a palindrome

always a string


*/
}


isPalindrome = (string) => { 
    return string === string.split("").reverse().join("") ? true : false
}


isPalindrome("level")
isPalindrome("levell")