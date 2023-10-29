// var,. let, const

var x = 1; // legacy code, it's an old alternative

/*
var x = 1:
var x = 2:
no errors promt by the browser

let x = 1;
let x = 2;
will display an error.

let x = 1;
x = 2; 
it's a good use of replacing a variable 

const x = 1;
x = 2;
will not change. const does not change
*/


/*
// GLOBAL SCOPE
var x = 1;
let y = 2;
const z = 3;


// LOCAL SCOPE
{
    let y =4; // no errors till here
}

function myFunction(){
    const z = 5;
}

// local scope it's like a box inside of the program. it will not be display like a global one, it's another enviorment. local scope does not moves up, will not take the value of a global variable.
*/


var x = 1; // function scoped
let y = 2; // block scoped
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var z = 420;
    // console.log(`function: ${x}`);
    // console.log(`function: ${y}`);
    // console.log(`function: ${z}`);

    {
        let x = 6;
        var z = 20; // function scoped
        const y = 4; // block scoped
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

myFunc();

// it's hierarchy. buuut var variables doesn't give a fffffunction and will change it cause is at a function level


/* DAVE NOTES:

Global = Not in a function or block. NOT DESIRABLE.
Local = IN a function or block. Not global.
var instatiates funcion() scoped variables.
let and const instantiate {block} scoped variables.

*/