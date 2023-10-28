// User Input

// alert("Hello there");


/* Display an ok/cancel alert and shows the bool. type

let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);
*/


/* EXAMPLE 
let name = prompt("Please enter your name.");
if (name) {
    // console.log(name ?? "You didn't enter your name"); 
    console.log(name)
} else {
    console.log("You didn't enter your name.") // empty 'Ok' handler
}


// the ?? it's called nullish coalescing operator.it's use to handle null data and redirect it
*/

// Better use of this code, trimming the empty space to avoid issues in data bases
let name = prompt("Please enter your name.");
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name);
} else {
    console.log("You didn't enter your name.");
}

/* Output:
main.js:29 26
main.js:30 3
main.js:31 Jay                       
*/