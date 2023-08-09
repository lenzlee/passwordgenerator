var pswdLength  = 5;
var pswdArray =[];
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCaseLtrArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLtrArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var spCharArray = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ">", "<", "@", "#", "$", "%"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //true or false
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
  var randomPassword = generatePassword();
  passwordText.value = randomPassword;
} else {
  passwordText.value = "";
}

}

function generatePassword() {
// generate password based on user input
var password ="";
for(var i = 0; i < pswdLength; i++) {
  var randomIndex = Math.floor(Math.random() * pswdArray.length);
  password = password + pswdArray[randomIndex];
}
return password;
}

function getPrompts() {
  pswdArray = [];

  pswdLength = parseInt (prompt("How many characters do you want the password to be?"));

  if(isNaN(pswdLength) || pswdLength <5 || pswdLength > 128) {
    alert("Character length has to be a number, 5 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("Do you want lowercase letters in your password?")) {
    pswdArray = pswdArray.concat(lowerCaseLtrArray);
  }

  if (confirm("Do you want uppercase letters in your password?")) {
    pswdArray = pswdArray.concat(upperCaseLtrArray);
  }

  if (confirm("Do you want special characters in your password?")) {
    pswdArray = pswdArray.concat(spCharArray);
  }

  if (confirm("Do you want numbers in your password?")) {
    pswdArray = pswdArray.concat(numberArray);
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
