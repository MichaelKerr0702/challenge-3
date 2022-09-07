//global vars 
arrayOfNumbers = ['0','1','2','4','5','6','7','8','9'];
arrayOfUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
arrayOfAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
arrayOfSpecialChars =['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>',"?","@","[",'\'',']',"^","_","`",'{','|','}','~'];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password 
function generatePassword() {
  var passwordgenerated  = [];
  var arrayOfYes = [];
 //gather user info 
    //ask user how long they want password 
    var passwordLength = window.prompt("how long would you like your password (8-128)");
    //ask to include lowercase
    var lowercase = window.confirm("would you like to include lowercase? (OK = yes / cancel = no)");
    //ask to include uppercase
   var uppercase = window.confirm("would you like to include uppercase? (OK = yes / cancel = no)");

   //ask to include numbers 
    var numbers = window.confirm("would you like to include numbers? (OK = yes / cancel = no)");

    //ask to include special charactars 

    var specialCharactars = window.confirm("would you like to include special charactars? (OK = yes / cancel = no)");
    //validate input (alert user thank you for the inputs)
    window.alert("Thank you for the inputs");

  if (8 > passwordLength || passwordLength > 128 ){
    window.alert("you must select a length between 8-128")
    generatePassword();
  }else if(!lowercase && !uppercase && !numbers && !specialCharactars){
    window.alert("you must select yes to at least one option ")
    generatePassword();
  }
  //adding names to array of choices 
  if(lowercase){
      arrayOfYes.push("lowerCase");
  }
  if(uppercase){
    arrayOfYes.push("upperCase");
  }
  if(numbers){
    arrayOfYes.push("numbers");
  }
  if(specialCharactars){
    arrayOfYes.push("specialCharacters");
  }
  //generate password 
  for(var i = 0; i < passwordLength; i++){
    var randomSelection = Math.floor(Math.random() * arrayOfYes.length);
    if(arrayOfYes[randomSelection] === "lowerCase"){
      var random = (Math.floor(Math.random() * 26));
      var onechar = arrayOfAlphabet[random];
      console.log(onechar);
      passwordgenerated.push(onechar);
    }else if (arrayOfYes[randomSelection] === "upperCase"){
      var random = (Math.floor(Math.random() * 26));
      var onechar = arrayOfUpper[random];
      console.log(onechar);
      passwordgenerated.push(onechar);
    }else if (arrayOfYes[randomSelection] === "numbers"){
      var random =(Math.floor(Math.random() * 26));
      var onechar = arrayOfNumbers[random];
      console.log(onechar);
      passwordgenerated.push(onechar);
    }else if (arrayOfYes[randomSelection] === "specialCharacters"){
      var random = (Math.floor(Math.random() * 26));
      var onechar = arrayOfSpecialChars[random];
      console.log(onechar);
      passwordgenerated.push(onechar);
    }

  }
  return passwordgenerated.join('');
}
