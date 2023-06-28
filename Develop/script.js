// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharactersArray = []
var numberArray = []


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//prompt the useer//
function generatePassword(){
// get users desiered password length
var characterLength =  parseInt(prompt("Please select the length of your password between 8 and 128 characters"))
var con = confirm("Did you choose your password?")

if(isNaN(characterLength) || characterLength < 8 || characterLength > 128 ){
  alert("Password length is incorrect please enter a number 8 - 128! try again ") 
  return "generatePassword!";

}

}

// return generatePassword()



//check if the length is 8 - 128

//find out which characters they want to use

//check if the user picked at least one character type

//generate the random password with the user options

 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
