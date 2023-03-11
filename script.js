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
    while ((lowercase !== "YES") && (lowercase !== "NO")) {
      lowercase = prompt("Please type yes or no.");
      lowercase = lowercase.toUpperCase();
    }
    console.log(lowercase);

    var uppercase = prompt("Would you like uppercase characters? Please type yes or no.");
    uppercase = uppercase.toUpperCase();
    // validate input 
    while ((uppercase !== "YES") && (uppercase !== "NO")) {
      uppercase = prompt("Please type yes or no.");
      uppercase = uppercase.toUpperCase();
    }
    console.log(uppercase);

    var numeric = prompt("Would you like numeric characters? Please type yes or no.");
    numeric = numeric.toUpperCase();
    // validate input 
    while ((numeric !== "YES") && (numeric !== "NO")) {
      numeric = prompt("Please type yes or no.");
      numeric = numeric.toUpperCase();
    }
    console.log(numeric);

    var special = prompt("Would you like special characters? Please type yes or no.");
    special = special.toUpperCase();
    // validate input 
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
  
  // incomplete list of spacial characters
  console.log(lowercaseChar);
  console.log(uppercaseChar);
  console.log(numericChar);
  console.log(specialChar);

  // generate an empty array of the selected length
  // var passwordTest = [];
  var passwordChoices = [];
  var passwordCharArray = [];
  var numYes = 0
  for (var i = 0; i < passwordChar.length; i++) {
    if (passwordChar[i] == 'YES') {
      numYes++;
      console.log(passwordChar[i]);
      console.log(numYes);

    }
  }
  console.log(numYes);
  var passwordDiv = passwordChar[0] / numYes;
  console.log(passwordDiv);

  // IF user selects yes for any given character prompt 
  if (passwordChar[1] == 'YES') {
    passwordChoices = passwordChoices.concat(lowercaseChar);
    var lowercaseSelect = [];
    for (var i = 0; i < Math.floor(passwordDiv); i++) {
      lowercaseSelect[i] = lowercaseChar[(Math.floor(Math.random() * lowercaseChar.length))];
      console.log(lowercaseSelect)
      
    }
    passwordCharArray = passwordCharArray.concat(lowercaseSelect)
  }
  if (passwordChar[2] == 'YES') {
    passwordChoices = passwordChoices.concat(uppercaseChar);
    var uppercaseSelect = [];
    for (var i = 0; i < Math.floor(passwordDiv); i++) {
      uppercaseSelect[i] = uppercaseChar[(Math.floor(Math.random() * uppercaseChar.length))];
      console.log(uppercaseSelect)
      
    }
    passwordCharArray = passwordCharArray.concat(uppercaseSelect)
  }
  if (passwordChar[3] == 'YES') {
    passwordChoices = passwordChoices.concat(numericChar);
    var numericSelect = [];
    for (var i = 0; i < Math.floor(passwordDiv); i++) {
      numericSelect[i] = numericChar[(Math.floor(Math.random() * numericChar.length))];
      console.log(numericSelect)
      
    }
    passwordCharArray = passwordCharArray.concat(numericSelect)
  }
  if (passwordChar[4] == 'YES') {
    passwordChoices = passwordChoices.concat(specialChar)
    var specialSelect = [];
    for (var i = 0; i < Math.floor(passwordDiv); i++) {
      specialSelect[i] = specialChar[(Math.floor(Math.random() * specialChar.length))];
      console.log(specialSelect)
      
    }
    passwordCharArray = passwordCharArray.concat(specialSelect)
  }

  console.log(passwordCharArray);

  if (passwordChar[0]%numYes) {
    var remainder = (Math.floor(passwordDiv))*numYes;

    console.log(remainder);
    passwordCharArray.push(passwordChoices[(Math.floor(Math.random() * passwordChoices.length))]);
  }



  // figure out what is YES
  // randomly select an equal amount from each yes
  // divide password length by how many YESes
  // randomly choose from char arrays
  // add arrays together
  // randomly choose from that array
  // if not full length, randomly choose from big array


  // Random characters chosen AND randomly placed within password array
    // randomly grab and place in a new array
    
console.log(passwordCharArray.length);

// copy of array to erase (will use og array after testing)
var copyPasswordCharArray = passwordCharArray;

console.log(passwordCharArray);

var newPassword = [];

  for (var i = copyPasswordCharArray.length; i > 0; i--) {
    // choose random spot in array
    var selectNum = Math.floor(Math.random()*copyPasswordCharArray.length);
    // grab the string in that spot
    var selectChar = copyPasswordCharArray[selectNum];
    // erase that spot AND shorten array accordingly
    copyPasswordCharArray.splice(selectNum, 1);
    // place randomly in new empty array (or from start to finish)
    newPassword = newPassword.concat(selectChar);

    console.log(selectNum);
    console.log(selectChar);
    console.log(newPassword);
    console.log(copyPasswordCharArray);
    console.log(passwordCharArray);

  }

  console.log(passwordCharArray);

  // var password = Array.from({ length: passwordChar[0] });
  // console.log(password);
  // for (var i = 0; i < passwordChar[0]; i++) {
  //   password[i] = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
  // }

console.log(passwordCharArray)
  console.log(password);
  // array to be filled completely but at random

  // Get references to the #password element
  var passwordText = document.querySelector("#password");

  var password = newPassword.join("");
  passwordText.value = password;
  // toString

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
