// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var charactersInPassword = [];
var lengthOfPassword;
let randomElement;
var finalPassword = [];
var finalestPassword = [];

// Function to prompt user for password options
function getPasswordOptions() {
    // Get the length of the password and check if it is the correct length
    lengthOfPassword = prompt("How long should the password be");
    lengthOfPassword = parseInt(lengthOfPassword);

    if (lengthOfPassword < 8 || lengthOfPassword > 128 || isNaN(lengthOfPassword)) {
        ;
    } else {
        // Ask the user if the password should contain lower case, upper case, numbers and special characters
        let lowerCaseLetters = confirm("Should your password contain lowercase letters");
        if (lowerCaseLetters) {
            charactersInPassword.push(...lowerCasedCharacters);
        }

        let upperCaseLetters = confirm("Should your password contain uppercase letters");
        if (upperCaseLetters) {
            charactersInPassword.push(...upperCasedCharacters);
        }

        let numbers = confirm("Should your password contain numbers");
        if (numbers) {
            charactersInPassword.push(...numericCharacters);
        }

        let specialCharactersInPassword = confirm("Should your password contain special characters");
        if (specialCharactersInPassword) {
            charactersInPassword.push(...specialCharacters);
        }

        // If the user selects at least one character, run the getRandom function. Else, display an alert saying the conditions were not met
        if (!(lowerCaseLetters) && !(upperCaseLetters) && !(numbers) && !(specialCharacters)) {
            alert("None of the conditions are met");
        } else {
            getRandom(charactersInPassword);
            return finalPassword;
        }
    }
}

getPasswordOptions();

// Function to get a random character for the number of characters specified by the user
function getRandom() {
    for (let i = 0; i < lengthOfPassword; i++) {
        randomElement = charactersInPassword[Math.floor(Math.random() * charactersInPassword.length)];
        finalPassword.push(randomElement);
    } // Generate the characters for the random password
    finalPassword = finalPassword.join("")
}

document.getElementById('password').innerText = finalPassword;

// Write password to the #password input
function writePassword() {
    // Reset the variables
    charactersInPassword = [];
    lengthOfPassword = undefined;
    randomElement = undefined;
    finalestPassword = [];
    finalPassword = [];
    // Run the getPasswordOptions function
    getPasswordOptions();
    var passwordText = document.querySelector('#password');
    if (finalPassword.length > 8 && finalPassword.length < 128) {
        passwordText.value = finalPassword;
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);