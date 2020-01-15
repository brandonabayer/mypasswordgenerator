var lowerCase = "char1";
var upperCase = "char2";
var specialCase = "char3";
var numericCase = "char4";

var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','-','+','=','?','~',';',':','{','}','[',']'];
var numericChar = ['1','2','3','3','4','5','6','7','8','9','0'];

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