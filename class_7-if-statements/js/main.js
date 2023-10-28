// Conditionals: IF Statements

//syntax
//    if (condition) {
          //run some code
//    } else {
        //run some different code
//    }


/* EXAMPLE 1

let customerIsBanned = false; // true for testing
let soup = "chicken noodle soup";
let crackers = true; // false for testing
let reply;

if (customerIsBanned) {
    reply = "No soup for ya"
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} and crackers`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = "Sorry, we're out of soup."
}
console.log(reply);
*/


/* EXAMPLE 2

let testScore = 80;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
}  else if (testScore >= 60) {
    grade = "D";
}  else {
    if (collegeStudent) {
        grade = "U"
    } else {
        grade = "F"
    }
}
console.log(grade);
*/

// Decision tree!
let playerOne = "paper"
let computer = "rock"

if (playerOne === computer) {
    console.log("Tie game!")
} else if (playerOne === "rock") {
    if (computer === "paper") {
        console.log("Computer wins!")
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        console.log("Player one wins!")
    }
} else {
    if (computer === "rock") {
        console.log("Computer wins!")
    } else {
        console.log("Player one wins!")
    }
}

// needs a fix!