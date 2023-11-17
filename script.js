// Assignment code here
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter the length of the password. It should be between 8 and 128."));
  
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128.");
    return;
  }

  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSymbols = confirm("Do you want to include special characters?");

  var characters = '';
  if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) characters += '0123456789';
  if (includeSymbols) characters += '!@#$%^&*()';

  if (characters === '') {
    alert("You must select at least one character type.");
    return;
  }

  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * characters.length);
    password += characters[randomNum];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
