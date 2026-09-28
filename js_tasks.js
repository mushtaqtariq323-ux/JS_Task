//*****************Task 1******************

var str = prompt("Enter a string:");

var upperCaseStr = str.toUpperCase();
var charCount = str.length;
var replacedStr = str.replaceAll(" ", "_");

document.write("Original String: " + str + "<br>");
document.write("Uppercase: " + upperCaseStr + "<br>");
document.write("Character Count: " + charCount + "<br>");
document.write("After Replacing Spaces: " + replacedStr);


//*****************Task 2******************

var num = +prompt("Enter a number:");
var factorial = 1;

for (var i = num; i >= 1; i--) {
    factorial *= i;
}

document.write("Factorial of " + num + " is " + factorial);