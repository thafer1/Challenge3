// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

console.log(randomLower ());
console.log(randomCaps ());
console.log(randomNo ());
console.log(randomSymbol ());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


