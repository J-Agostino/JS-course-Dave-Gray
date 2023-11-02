// NUMBERS

const myNum = 23;

console.log(myNum);


const myFloat = 23.0;

console.log(myFloat);


const myFloatFloated = 23.01;

console.log(myFloatFloated);


const myString = "31";

console.log(myString);

// IF A FLOAT HAS NO DECIMALS, CAN BE EQUAL TO A NUM BESIDES THEY ARE NOT THE SAME DATA TYPE. A STRING AND A NUM WILL NEVER BE THE SAME, NO MATTER WHAT

console.log(Number(myString)+ myNum); // convert a string into number

// NaN == Not a Number
// console.log(Number("Dave")) > NaN


console.log(Number.isInteger(myNum)) ;
console.log(Number.parseFloat(myFloatFloated)); 

const parsed = "12hola3"
console.log(Number.parseFloat(parsed)); // parseInt for ints


console.log(myFloat.toFixed(4)) // didnt really understand this one... but retrieves a string 

console.log(myFloat.toString()) // converts to a string

// CHAINS

console.log(Number.parseFloat("4.2351hey").toFixed(2).toString())


// Number.isNaN() method determines whether the value is NaN AND its type is Number.

// The isNaN() function determines whether a value is NaN or not