// Conditionals: Ternary Operator

// syntax
// condition ? ifTrue : ifFalse;

/* EXAMPLE ONE
let soup = "Chiken Noodle Soup"; 
let response = soup ? "Yes, we have soup" : "Sorry. No soup today";

console.log(response)
// Removing the soup content will give a false output, so it the ifFalse will be displayed.
*/


/* EXAMPLE TWO
let soup = "Chiken Noodle Soup";  //false
let isCustomerBanned = true; // false
let soupAccess = isCustomerBanned ? "No soup for ya" : soup ? `Yes, we have ${soup} today.` : "Sorry, we have no more soup."

console.log(soupAccess)
*/


/* EXAMPLE THREE

let testScore = 60;
let myGrade = testScore > 89 ? "A" 
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F"

console.log(`My grade is a ${myGrade}.`)
*/


// EXAMPLE FOUR

let playerOne = "scissors"
let computer = "rock"
let result = 
    playerOne === computer ? "Tie game!" 
    : playerOne === "rock" && computer === "paper" ? "computer wins!" 
    : playerOne === "paper" && computer === "scissors" ? "computer wins!" 
    : playerOne === "scissors" && computer === "rock" ? "computer wins!"
    : "player one wins!";
console.log(result)