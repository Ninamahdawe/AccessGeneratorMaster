// Assignment Code
var charactertype = [];
//var choiceArray = [];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var specialCharactersArrayy = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":",];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//prompt the useer//
// get users desiered password length
//var con = confirm("Did you choose your password?")

function generatePassword() {
  var choiceArray = [];
  var typeCheck = false
  var characterLength = parseInt(prompt("Please select the length of your password between 8 and 128 characters"));

  //check if the length is 8 - 128

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Password length is incorrect please enter a number 8 - 128! try again "
    );
    return "";
  }
  //generate the random password with the user options
  //find out which characters they want to use


  if (confirm("Would you like your password to have a lowercase letter?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
    typeCheck = true

  }
  if (confirm("Would you like your password to have a upperrcase letter?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
    typeCheck = true

  }

  if (confirm("Would you like your password to have a special characters?")) {
    choiceArray = choiceArray.concat(specialCharactersArrayy);
    typeCheck = true

  }
  if (confirm("Would you like your password to have numbers?")) {
    choiceArray = choiceArray.concat(numberArray);
    typeCheck = true

  } else {
    choiceArray = choiceArray.concat(numberArray);
  }
  // this is to do about check if user has choose one type of character
  if (!typeCheck) {
    alert("You must choose at least one character type for your password.");
    return "";
  }

  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password += choiceArray[randomIndex];
  }
  // return generatePassword

  return password;
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);