// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  // Call the function to ask user prompts
  var password = generatePassword(); 
  
  // Function that will ask the user prompts
  function generatePassword () {
    
    // prompt series
    var first = prompt("1");

    
  }
  // Get references to the #password element
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
