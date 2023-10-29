// Functions

// Methods = Built-in functions

// "Dave".toLowerCase() // this is a method
// Math.random() // this as well

// Function Declaration Syntax:
/*
function funName(num1, num2) {
    // code to execute
    return num1 + num2;
}
console.log(funName(2, 6))
*/


/* EXAMPLE ONE
function funName(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1
    } 
    return num1 + num2;
}
console.log(funName(2))
*/

/* EXAMPLE TWO  
//function getUserNameFromEmail(email)
// const getUserNameFromEmail = function (email) {

const getUserNameFromEmail =  (email) => { // arrow function
    return email.slice(0, email.indexOf("@")); //indexOf will find the string and stop there because of slice function
}

let email = "myemail@mail.com";
console.log(getUserNameFromEmail(email));
*/

/* EXAMPLE THREE  */

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("dAmiEn"))
let badManner = prompt("Give me your name!")
console.log(toProperCase(badManner))