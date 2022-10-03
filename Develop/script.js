// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Provides the fuctionality for button
function passwordGenerator() {

  // Prompts the user for a preferred number of characters and stores it as a variable
  var userChoice = window.prompt("How many characters would you like in your password?");
  var passwordLength = parseInt(userChoice);

  // Determines if the user's input is valid
  if (isNaN(passwordLength)) {
    window.alert("Invalid input. Try again")
    return "Please try again.";
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters. Try again.");
    return "Please try again.";
  }

  // Asks the user for password criteria
  var userLower = window.confirm("Do you want lowercase letters?");
  var userCaps = window.confirm("Do you want capital letters?");
  var userNo = window.confirm("Do you want numbers?");
  var userSymbol = window.confirm("Do you want special characters?");

  // Determines if the user's input is valid
  if (userLower === false && userCaps === false && userNo === false && userSymbol === false) {
    window.alert("At least one character type must be selected. Try again.")
    return "Please try again.";
  }

  // Functions that generate the randomized characters
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

  // Creates an array that will store the final password
  var randomPassword = []

  // Fills the array with the randomized characters
  for (i = 0; i < passwordLength; i++) {
    if (userLower === true) {
      randomPassword.push(randomLower());
    }
    if (userCaps === true) {
      randomPassword.push(randomCaps());
    }
    if (userNo === true) {
      randomPassword.push(randomNo());
    }
    if (userSymbol === true) {
      randomPassword.push(randomSymbol());
    }
  }

  // Sets the length of the password as input by the user
  randomPassword.length = passwordLength;

  // Generates final randomized password
  return randomPassword.join(" ");
}

// Prints final password onto the page
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}