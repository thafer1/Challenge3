// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passwordGenerator() {

  var userChoice = window.prompt("How many characters would you like in your password?");

  var passwordLength = parseInt(userChoice);

  if (isNaN(passwordLength)) {
    window.alert("Invalid input. Try again")
    return;

  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters. Try again.");
    return;
  }

  var userLower = window.confirm("Do you want lowercase letters?");
  var userCaps = window.confirm("Do you want capital letters?");
  var userNo = window.confirm("Do you want numbers?");
  var userSymbol = window.confirm("Do you want special characters?");

  if (userLower === false && userCaps === false && userNo === false && userSymbol === false) {
    window.alert("At least one character type must be selected. Try again.")
  }

  function randomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function randomCaps () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function randomNo () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function randomSymbol () {
  var symbols = '!@#$%^&*(){}[]=<>/.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
  }

  var selectedOptions = []

  for (i = 0; i < passwordLength; i++) {
    if (userLower === true) {
      selectedOptions.push(randomLower());
    }
    if (userCaps === true) {
      selectedOptions.push(randomCaps());
    }
    if (userNo === true) {
      selectedOptions.push(randomNo());
    }
    if (userSymbol === true) {
      selectedOptions.push(randomSymbol());
    }
  }

  selectedOptions.length = passwordLength;
  return selectedOptions.join(" ");
}

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}