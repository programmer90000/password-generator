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
    let lengthOfPassword = prompt("How long should the password be");
    lengthOfPassword = parseInt(lengthOfPassword);

    if (lengthOfPassword < 8 || lengthOfPassword > 128 || isNaN(lengthOfPassword)) {
        ;
    } else {
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
        
        if (!(lowerCaseLetters || upperCaseLetters || numbers || specialCharacters)) {
            console.log("None of the conditions are met");
        } else {
            console.log("This password meets at least one of the conditions");

        }
    }
    console.log(charactersInPassword);

}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
