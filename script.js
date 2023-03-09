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
      // lowercase
      // uppercase
      // numeric 
      // special characters
    var characters = ['lowercase','uppercase','numeric','special characters']
    var characterPrompt = alert("Select which characters you would like to be a part of the password.");
 
    console.log(characterPrompt);
    

    var lowercase = prompt("Would you like lowercase characters? Please type yes or no.");
    lowercase = lowercase.toUpperCase();
    // validate input function 
    console.log(lowercase);

    var testFour = prompt("4");
    console.log(testFour);

    
  }
  // Get references to the #password element
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
