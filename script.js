// Assignment Code
var generateBtn = document.querySelector("#generate");
//random character arrays
    const numeric = ["1","2","3","4","5","6","7","8","9","0"];
    const lowchar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upchar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const special = [",",".","/",";","'","[","]","-","=","!","@","#","$","%","^","&","*","(",")"];
    
    let password= ""
    let availableItems= ""
//available items

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
   
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}



function generatePassword (){

 
    //questionaire
let passwordlength = window.prompt("choose length of password (8 to 124)",);
let num1 = parseInt(passwordlength);
if (num1 > 128 ) {
  return "";
} else if (num1 < 8) {
  return "";
};
if(num1 ===0) return;


let numericChoice = confirm("would you like numbers to be included?");

let charChoice1 = confirm("would you like lowercase letters to be included?");

let charChoice2 = confirm("would you like Uppercase letters to be included?");

let specialChoice = confirm("would you like special characters to be included?");


var availableItems=[];
if(numericChoice){
  availableItems=numeric.concat();
}
if(charChoice1){
  availableItems=lowchar.concat(availableItems);
}
if(charChoice2){
  availableItems=upchar.concat(availableItems);
}
if(specialChoice){
  availableItems=special.concat(availableItems);
}

let output = randomPassword();
console.log(output)
function randomPassword(){
  var randomGenerate=''
  for(i=0;i<num1; i++){
  let RandomValues = Math.floor(Math.random()*availableItems.length);
  randomGenerate+=availableItems[RandomValues];
} return randomGenerate; }

  return output;


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
