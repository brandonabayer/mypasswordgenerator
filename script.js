var lowerCase = "char1";
var upperCase = "char2";
var specialCase = "char3";
var numericCase = "char4";

var lowerChar = [abcdefghijklmnopqrstuvwxyz];
var upperChar = [ABCDEFGHIJKLMNOPQRSTUVWXYZ];
var specialChar = [];
var numericChar = [12334567890];

function myFunction() {
    var x, text;
    
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than 8 or greater than 128
    if (isNaN(x) || x < 8 || x > 128) {
        text = "Input not valid";
    } else {
        ;
    };
    document.getElementById("generator").innerHTML = text;
}