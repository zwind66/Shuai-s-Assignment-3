// Assignment code here
function generatePassword(){
  // Password length
  var length = Number(prompt('How many characters in your password? Choose between 8 and 128'));
  while (isNaN(length) || length < 8 || length > 128){
    length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  } 

  // Password criteria
  var numbers = confirm("Do you want to contain numbers?");
  var uppers = confirm("Do you want to contain upper case letters?");
  var lowers = confirm("Do you want to contain lower case letters?");
  var symbols = confirm("Do you want to contain contain special characters?");

  while (!numbers && !uppers && !lowers && !symbols) {
    alert("You must choose a criteria!");
    numbers = confirm("Do you want to contain numbers?");
    uppers = confirm("Do you want to contain upper case letters?");
    lowers = confirm("Do you want to contain lower case letters?");
    symbols = confirm("Do you want to contain contain special characters?");
  }

  console.log(" Passworkd length is " + length);
  console.log(" Number " + numbers );
  console.log(" Lower case " + uppers );
  console.log(" Upper case " + lowers);
  console.log(" Special Character " + symbols);

  var password = "";

  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) {
    password += rando(rando(allowed).value);
  }

  password = randoSequence(password).join("");
  console.log("Your Pasword is: " + password);
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

