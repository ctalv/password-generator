// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  // Call the function to ask user prompts
  var password = generatePassword(); 

  // Function that will ask the user prompts
  function generatePassword () {
    
    // prompt series + criteria
    var lengthPrompt = prompt("Choose a length for the password, between 8 and 128 characters.");
    console.log(lengthPrompt);

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

    var choices = [lowercase,uppercase,numeric,special];
    return choices;

  }

  console.log(password);
  // character arrays (hardcoded for testing)
  var lowercaseChar = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
  var uppercaseChar = lowercaseChar;
//  for (var i = 0; i < uppercaseChar.length(); i++) {
//   uppercaseChar = [uppercaseChar.toUpperCase(i)];
//  }
  var numericChar = [1,2,3,4,5,6,7,8,9,0];
  var specialChar = ['~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']'];
  // incomplete list of spacial characters
  console.log(lowercaseChar);
  console.log(uppercaseChar);
  console.log(numericChar);
  console.log(specialChar);

  // generate an empty array of the selected length
  // var passwordTest = [];
  var passwordChoices = [];
  // IF user selects yes for any given character prompt, random characters chosen AND randomly placed within password array
if (password[0] == 'YES'){
  passwordChoices = passwordChoices.concat(lowercaseChar);
}
if (password[1]  == 'YES'){
  passwordChoices = passwordChoices.concat(uppercaseChar);
}
if (password[2]  == 'YES'){
  passwordChoices = passwordChoices.concat(numericChar);
}
if (password[3]  == 'YES'){
  passwordChoices = passwordChoices.concat(specialChar);
}



console.log(passwordChoices);
  // array to be filled completely but at random

  // Get references to the #password element
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
