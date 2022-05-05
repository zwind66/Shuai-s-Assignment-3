// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;

const randomFunc ={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  Symbol: getRandomSymbol
}

// Generate function - http://www.net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol() {
 const symbols = '~`!@#$%^&*()_-+={[}]|\:;<,>.?/';
 return symbols[Math.floor(Math.random()* symbols.length)];
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

//Start questions
function generatePassword() {
  passwordLength =prompt('How many characters in your password? Choose between 8 and 128');
  console.log('Passworkd length is' + passwordLength);
  
  if(isNaN(passwordLength)){
    alert('Please enter a number');
    return generatePassword(); 
  }
  else if(!passwordLength){
    alert('Please enter a valid password length');
    return generatePassword();  
  }
  else if (passwordLength < 8 || passwordLength > 128){
    alert('Please enter a valid password length');
    return generatePassword(); 
  }
  else{
    confirmNumber = confirm("Do you want to contain numbers?");
    console.log(" Number " + confirmNumber);
    confirmLower = confirm("Do you want to contain lower case letters?");
    console.log(" Lower case " + confirmLower);
    confirmUpper = confirm("Do you want to contain upper case letters?");
    console.log(" Upper case " + confirmUpper);
    confirmSpecial = confirm("Do you want to contain contain special characters?");
    console.log(" Special Character " + confirmSpecial);
  };

  //No answers
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    showPassword = alert("You must choose a criteria!");   
  }
  //4 ture
  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial){
    
  }
  






}


