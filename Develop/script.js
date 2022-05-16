// Assignment Code
var generateBtn = document.querySelector("#generate");
//random character arrays
    var numeric = ["1","2","3","4","5","6","7","8","9","0"];
    var lowchar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upchar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var special = [",",".","/",";","'","[","]","-","=","!","@","#","$","%","^","&","*","(",")"];

//available items
const Userinput = (Length,HasNumbers,HasUpper,HasLower,HasSpecial) =>{
  const availableItems =[

    ...(HasNumbers ? numeric : []),
    ...(HasUpper ? upchar : []),
    ...(HasLower ? lowchar: []),
    ...(HasSpecial ? special: [])
  ];
console.log(availableItems)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
   
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


function generatePassword (){
  console.log("password generated");

    //questionaire
let passwordlength = window.prompt("choose length of password (8 to 124)",);
var num1 = parseInt(passwordlength);
if (num1 > 128 ) {
  return "";
} else if (num1 < 8) {
  return "";
};
if(num1 ===0) return;
console.log(passwordlength);

numericChoice = confirm("would you like numbers to be included?")
if (true) {
    console.log(numericChoice)
};

charChoice1 = confirm("would you like lowercase letters to be included?")
if (true) {
  console.log(charChoice1)
};

charChoice2 = confirm("would you like Uppercase letters to be included?")
if (true){
  console.log(charChoice2)
};

specialChoice = confirm("would you like special characters to be included?")
if(true) {
  console.log(specialChoice)
};
  return //generated password here
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
