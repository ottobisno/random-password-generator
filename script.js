// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Defining arrays for each type of character to be included for any given password
var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Defining the initial array used for the password with no characters specified
var passwordCharacters = [];

// Prompts the user with several questions to determine the criteria and length of the password they desire
function generatePassword() {

  // Prompts the user to enter which character types to include in the password and stores them in an array accordingly
  function passwordCharacterDetermination() {
    var lowerCaseConfirmation = confirm("Would you like to include lower case characters in your password?");
      if (lowerCaseConfirmation) {
        passwordCharacters = passwordCharacters.concat(lowerCaseCharacters);
      }
    var upperCaseConfirmation = confirm("Would you like to include upper case characters in your password?");
      if (upperCaseConfirmation) {
        passwordCharacters = passwordCharacters.concat(upperCaseCharacters);
      }
    var numericCharactersConfirmation = confirm("Would you like to include numeric characters in your password?");
      if (numericCharactersConfirmation) {
        passwordCharacters = passwordCharacters.concat(numericCharacters);
      }
    var specialCharactersConfirmation = confirm("Would you like to include special characters in your password?");
      if (specialCharactersConfirmation) {
        passwordCharacters = passwordCharacters.concat(specialCharacters);
      }
  }

  // Calls the function to initiate the character criteria prompts
  passwordCharacterDetermination();

  // If the user does not choose any types of characters to include in the password, they will be asked to choose at least one
  while (passwordCharacters.length == 0) {
    alert("You must select at least one character type to be included within your password.");
    passwordCharacterDetermination();
  }

  // Prompts the user to enter the desired amount of characters for their password
  var passwordLength = Number(prompt("How many characters would you like your password to include? (Please enter a numeric value between 8 and 128)"));

  // Ensuring that the user inputs a numeric value between 8 and 128
  while (passwordLength < 8 || passwordLength > 128 || !Number.isInteger(passwordLength)) {
      alert("Please enter a numeric value between 8 and 128 (inclusive)");
      passwordLength = Number(prompt("How many characters woud you like your password to include? (Please enter a numeric value between 8 and 128)"));
  }

  // Calls upon a random character from the accepted character types the user has chosen
  function randomizeCharacters(passwordCharacters) {
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);

    var randomCharacter = passwordCharacters[randomIndex];

    return randomCharacter;
  }

  // Defining the variable for what will ultimately be the generated password
  var generatedPassword = randomizeCharacters(passwordCharacters);

  // Iteratively concatenating randomized characters from the user's desired character types until the number of characters in the password match the amount specified by the user
  for (var i = 0; i < (passwordLength - 1); i++) {
    var generatedPassword = (generatedPassword + randomizeCharacters(passwordCharacters))

  }

  // Reseting the array for which character types have been specified, so that the user can generate multiple passwords without needing to refresh the page
  passwordCharacters = [];

// Returning the complete password the user specified
return generatedPassword;
}
