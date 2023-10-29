// Arrays
const myArray = [];


// add elements to an array
myArray[0] = "Juan"
myArray[1] = 2023;
myArray[2] = false;


/*
// refer to an array
console.log(myArray)

// length 
console.log(myArray.length)

// las element in an array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);
*/


/* BASIC ADD AND REMOVE 
// ADDING STUFF
const pushing = myArray.push("added");
console.log(pushing, "push")


// REMOVE STUFF
const lastItem = myArray.pop(); // remove the last one
console.log(myArray, lastItem, "removed")


// ADD FRONT
const unshifted = myArray.unshift(420)
console.log(unshifted, myArray, "unshifted")


// REMOVE FROM FRONT
const firstItem = myArray.shift()
console.log(firstItem, myArray, "shift")
*/


// delete myArray [1]  // CLEARS THE DATA, LEAVES AN EMPTY STATE, UNDEFINED

// myArray.splice(1, 1); // .splice(where to start, how many elements [0 for not deleting], "replace with this") 

// myArray.splice(1, 0, "new stuff") // add without deleting



/* SLICE
const newArray = ["A", "B", "C", "D", "E", "F"]

const sliced = newArray.slice(2,4); // slice from, but not included
*/


/* REVERSE
const newArray = ["A", "B", "C", "D", "E", "F"]

const reversed = newArray.reverse(); // reverse the array 
*/


/* JOIN
const newArray = ["A", "B", "C", "D", "E", "F"]

const joined = newArray.join(); // breaks the array and returns a string comma seperated

const joinedArray = joined.split(",")
console.log(joinedArray, "we made a new array!")
*/


/* JOIN ARRAYS WITH CONCAT
const newArrayA = ["A", "B", "C"];
const newArrayB = ["D", "E", "F"];

const concatArray = newArrayA.concat(newArrayB)
console.log(concatArray) 
*/


/* SPREAD OPERATOR: ...
const newArrayA = ["A", "B", "C"];
const newArrayB = ["D", "E", "F"];

const newWay = [...newArrayA, ...newArrayB] // spread operator

console.log(newWay) 
*/


/* TO RETRIEVE STUFF FROM NESTED ARRAYS
console.log(arraysNested[1][0][1]); 
EACH ONE OF THE [Num] SELECT AN ARRAY ITEM
THE MORE ARRAYS YOU HAVE THE MORE [] YOU'LL NEED
*/

// console.log(myArray) 
// console.log(myArray) 