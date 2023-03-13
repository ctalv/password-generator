// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Call the function to ask user prompts
  var passwordChar = generatePassword();

  // Function that will ask the user prompts
  function generatePassword() {

    // Prompt series + Criteria
    var lengthPrompt = prompt("Choose a length for the password, at least 8 and up to 128 characters.");

    // Validate length 
    while ((lengthPrompt < 8) || (lengthPrompt > 128)) {
      lengthPrompt = prompt("Please enter a length for the password, at least 8 and up to 128 characters.");
    }

    // Character prompts
    var characterAlert = alert("Select which characters you would like to be a part of the password.");
    var choices = [lengthPrompt, "NO", "NO", "NO", "NO"];

    while ((choices[1]==="NO") && (choices[2]==="NO") && (choices[3]==="NO") && (choices[4]==="NO")) {

    // Lowercase character prompt
    var lowercase = prompt("Would you like lowercase characters? Please type yes or no.");
    lowercase = lowercase.toUpperCase();
    // Validate input 
    while ((lowercase !== "YES") && (lowercase !== "NO")) {
      lowercase = prompt("Please type yes or no.");
      lowercase = lowercase.toUpperCase();
    }
    var uppercase = prompt("Would you like uppercase characters? Please type yes or no.");
    uppercase = uppercase.toUpperCase();
    // Validate input 
    while ((uppercase !== "YES") && (uppercase !== "NO")) {
      uppercase = prompt("Please type yes or no.");
      uppercase = uppercase.toUpperCase();
    }
    var numeric = prompt("Would you like numeric characters? Please type yes or no.");
    numeric = numeric.toUpperCase();
    // Validate input 
    while ((numeric !== "YES") && (numeric !== "NO")) {
      numeric = prompt("Please type yes or no.");
      numeric = numeric.toUpperCase();
    }
    var special = prompt("Would you like special characters? Please type yes or no.");
    special = special.toUpperCase();
    // Validate input 
    while ((special !== "YES") && (special !== "NO")) {
      special = prompt("Please type yes or no.");
      special = special.toUpperCase();
    }

    // Allows us to access variables in this function outside of its scope
    choices = [lengthPrompt, lowercase, uppercase, numeric, special];
    

  }
  return choices;

  }

  // Declaring all characters types
  var lowercaseChar = ('qwertyuiopasdfghjklzxcvbnm');
  var uppercaseChar = ('QWERTYUIOPASDFGHJKLZXCVBNM');
  var specialChar = ('`~!@#$%^&*()_-+={[}]|\':;"<,>.?/\\')
  var numericChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // Turn strings into arrays
  uppercaseChar = uppercaseChar.split("");
  lowercaseChar = lowercaseChar.split("");
  specialChar = specialChar.split("");
  
  // Declare empty array to store a full list of all the chosen characters
  var passwordChoices = [];
  // Declares empty array to store randomized characters at password length
  var passwordCharArray = [];
  // Declares number of chosen YES at 0 
  var numYes = 0

  // Counts how many times the user said YES
  for (var i = 0; i < passwordChar.length; i++) {
    if (passwordChar[i] == 'YES') {
      numYes++;
    }
  }

  // Length of the password divided by what characters were chosen
  var passwordDiv = passwordChar[0] / numYes;

  // IF user selects yes for any given character prompt
  // Series of if statements ensure at least one character is in the password by including an equal amount of each character type in the password

  // if statement for lowercase
  if (passwordChar[1] == 'YES') { // FUTURE ME: turn series of if statements into one if statement inside a for loop
    passwordChoices = passwordChoices.concat(lowercaseChar);
    var lowercaseSelect = []; // Declares an array for characters
    for (var i = 0; i < Math.floor(passwordDiv); i++) {
      // Randomly selects from the lowercase character array and places in array
      lowercaseSelect[i] = lowercaseChar[(Math.floor(Math.random() * lowercaseChar.length))];
    }
    // Adds randomized array
    passwordCharArray = passwordCharArray.concat(lowercaseSelect)
  }
  // if statement for uppercase
  if (passwordChar[2] == 'YES') {
    passwordChoices = passwordChoices.concat(uppercaseChar);
    var uppercaseSelect = [];
    for (var i = 0; i < Math.floor(passwordDiv); i++) {
      uppercaseSelect[i] = uppercaseChar[(Math.floor(Math.random() * uppercaseChar.length))];
    }
    passwordCharArray = passwordCharArray.concat(uppercaseSelect)
  }
  // if statement for numbers
  if (passwordChar[3] == 'YES') {
    passwordChoices = passwordChoices.concat(numericChar);
    var numericSelect = [];
    for (var i = 0; i < Math.floor(passwordDiv); i++) {
      numericSelect[i] = numericChar[(Math.floor(Math.random() * numericChar.length))];
    }
    passwordCharArray = passwordCharArray.concat(numericSelect)
  }
  // if statement for special characters
  if (passwordChar[4] == 'YES') {
    passwordChoices = passwordChoices.concat(specialChar)
    var specialSelect = [];
    for (var i = 0; i < Math.floor(passwordDiv); i++) {
      specialSelect[i] = specialChar[(Math.floor(Math.random() * specialChar.length))];
    }
    passwordCharArray = passwordCharArray.concat(specialSelect)
  }
  // passwordCharArray is an array now a with an equal amount of randomized characters and might not be at the specified length


  // IF the number of times the user chose YES is NOT equally divisible into the length of the password
  if (passwordChar[0]%numYes) {
    // Calculate the floor number of the number of 
    var remainderFull = (Math.floor(passwordDiv))*numYes;
    // Determine the difference between the chosen length of the password and the
    var remainder = passwordChar[0] - remainderFull;

    for (var i = 0; i < remainder; i++) {
      // Choose at random the characters to include to finish off the length of the password
      passwordCharArray.push(passwordChoices[(Math.floor(Math.random() * passwordChoices.length))])
    }
  }
  // passwordCharArray is an array now with an equal amount of randomized characters at the specified length

// Copy of array to erase
var copyPasswordCharArray = passwordCharArray;
var newPassword = []; // Declare empty array for final password

  for (var i = copyPasswordCharArray.length; i > 0; i--) {
    // Choose random spot in copied array
    var selectNum = Math.floor(Math.random()*copyPasswordCharArray.length);
    // Grab the string or character in that random spot
    var selectChar = copyPasswordCharArray[selectNum];
    // Erase that spot AND shorten array accordingly
    copyPasswordCharArray.splice(selectNum, 1);
    // Place that character at the end of the finalized password array
    newPassword = newPassword.concat(selectChar);
  }
// newPassword is a randomized version of passwordCharArray

  var passwordText = document.querySelector("#password");
  // Turn final password (var newPassword) into a string from an array
  var password = newPassword.join("");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
