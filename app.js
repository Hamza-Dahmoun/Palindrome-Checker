//********************************** Palindrome Checker
/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation,
case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into
the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

*/
function checkPalindrome() {
    //this function is executed when user starts typing
    //this function checks if the entered text is Palindrome, and displays the result

    //1- get text entered
    let text = document.getElementById("textInput").value;

    //2- les remove non-alpha-numeric characters from the entered text
    let alphanumText = removeNonAlphanumericChars(text);

    //3- lets check if 'alphanumText' is Palindrome
    let result = isPalindrome(alphanumText);

    //3- check if 'alphanumText' is palindrom, and display result
    document.getElementById("result").innerText = result;
}
function removeNonAlphanumericChars(str) {
    //this function selects the alpha-numeric parts of 'str' and returns it lowerCase
    let regex = /[a-z0-9]/gi;
    return str.match(regex).join("").toLowerCase();
}
function isPalindrome(str) {
    //this function checks if an alphanumeric text is palindrome, and return boolean value

    for (let i = 0; i < Math.floor(str.length/2); i++) {
        if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
            return false;
        }
    }
    return true;
}
//removeNonAlphanumericChars("race CAR");