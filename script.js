// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Call the function to ask user prompts
  var passwordChar = generatePassword();

  // Function that will ask the user prompts
  function generatePassword() {

    // prompt series + criteria
    var lengthPrompt = prompt("Choose a length for the password, at least 8 and up to 128 characters.");
    // validate length
    // lengthPrompt = "f"; // TEST
    console.log(lengthPrompt);
    while ((lengthPrompt < 8) || (lengthPrompt > 128)) {
      lengthPrompt = prompt("Please enter a length for the password, at least 8 and up to 128 characters.");
    }
    console.log(typeof lengthPrompt);

    // character prompt
    var characterAlert = alert("Select which characters you would like to be a part of the password.");
    console.log(characterAlert);

    var lowercase = prompt("Would you like lowercase characters? Please type yes or no.");
    lowercase = lowercase.toUpperCase();
    // validate input 
    lowercase = "YES"; // TEST
    while ((lowercase !== "YES") && (lowercase !== "NO")) {
      lowercase = prompt("Please type yes or no.");
      lowercase = lowercase.toUpperCase();
    }
    console.log(lowercase);

    var uppercase = prompt("Would you like uppercase characters? Please type yes or no.");
    uppercase = uppercase.toUpperCase();
    // validate input 
    uppercase = "YES"; // TEST
    while ((uppercase !== "YES") && (uppercase !== "NO")) {
      uppercase = prompt("Please type yes or no.");
      uppercase = uppercase.toUpperCase();
    }
    console.log(uppercase);

    var numeric = prompt("Would you like numeric characters? Please type yes or no.");
    numeric = numeric.toUpperCase();
    // validate input 
    numeric = "YES"; // TEST
    while ((numeric !== "YES") && (numeric !== "NO")) {
      numeric = prompt("Please type yes or no.");
      numeric = numeric.toUpperCase();
    }
    console.log(numeric);

    var special = prompt("Would you like special characters? Please type yes or no.");
    special = special.toUpperCase();
    // validate input 
    special = "YES"; // TEST
    while ((special !== "YES") && (special !== "NO")) {
      special = prompt("Please type yes or no.");
      special = special.toUpperCase();
    }
    console.log(special);

    var choices = [lengthPrompt, lowercase, uppercase, numeric, special];
    return choices;

  }

  console.log(passwordChar);

  var lowercaseChar = ('qwertyuiopasdfghjklzxcvbnm');
  var uppercaseChar = ('QWERTYUIOPASDFGHJKLZXCVBNM');
  var specialChar = ('`~!@#$%^&*()_-+={[}]|\':;"<,>.?/\\')
  var numericChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  
  uppercaseChar = uppercaseChar.split("");
  lowercaseChar = lowercaseChar.split("");
  specialChar = specialChar.split("");
  // \ '
  // incomplete list of spacial characters
  console.log(lowercaseChar);
  console.log(uppercaseChar);
  console.log(numericChar);
  console.log(specialChar);

  // generate an empty array of the selected length
  // var passwordTest = [];
  var passwordChoices = [];
  // IF user selects yes for any given character prompt 
  if (passwordChar[1] == 'YES') {
    passwordChoices = passwordChoices.concat(lowercaseChar);
  }
  if (passwordChar[2] == 'YES') {
    passwordChoices = passwordChoices.concat(uppercaseChar);
  }
  if (passwordChar[3] == 'YES') {
    passwordChoices = passwordChoices.concat(numericChar);
  }
  if (passwordChar[4] == 'YES') {
    passwordChoices = passwordChoices.concat(specialChar)
  }

  // Random characters chosen AND randomly placed within password array
  var password = Array.from({length: passwordChar[0]});
  console.log(password);
  for (var i = 0; i < passwordChar[0]; i++){
    password[i] = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
  } 


  console.log(password);
  // array to be filled completely but at random

  // Get references to the #password element
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// toString

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
