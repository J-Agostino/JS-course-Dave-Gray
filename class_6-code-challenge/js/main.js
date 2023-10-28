// Code Challenge

// Write code that will return a random letter from your name


// MY SOLUTION
const myName = "Juan Agostino"

const nameLen = myName.length 

// console.log(nameLen)

// console.log(Math.floor(Math.random() * nameLen) + 1)

let randomNum = (Math.floor(Math.random() * nameLen))

console.log(myName.charAt(randomNum))



// DAVE'S SOLUTION
const anyName = "Jonathan"

console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
