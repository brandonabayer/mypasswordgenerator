// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
function generatePassword() {
    var pLength = prompt("how long do you want the password to be? choose between 8-128")
    var valid = false;

    while (!valid) {
        if (
            pLength < 7
            || pLength > 128
            || isNaN(parseInt(pLength))
        ) {
            pLength = prompt("invalid try again. choose between 8-128")
        }
        else {
            valid = true;
        }
    }
    console.log(pLength);
    var specialCharacters = confirm("Do you want special characters?");
    var numericCharacters = confirm("Do you want numeric characters?");
    var lowercaseCharacters = confirm("Do you want lowercase characters?");
    var uppercaseCharacters = confirm("Do you want uppercase characters");

    if (specialCharacters) {
        var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    }
    if (numericCharacters) {
        var numbers = '0123456789';
    }
    if (lowercaseCharacters) {
        var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercaseCharacters) {
        var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    var all = uppercase + lowercase + numbers + symbols;
    console.log(all);
    var password = '';
    for (var index = 0; index < pLength; index++) {
        var randomNumber = Math.floor(Math.random() * all.length);
        console.log(randomNumber);
        password += all.substring(randomNumber, randomNumber + 1);
        console.log(password);
    }
    return password;
}
generateBtn.addEventListener("click", writePassword);
document.getElementById("generator").innerHTML = text;