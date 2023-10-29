// Loops


/* WHILE LOOP
let myNumber = 0;
while (myNumber < 50) {
    console.log(myNumber)
    myNumber++ // += 2 to increment by 2 or more
}
*/
// don't create an endless loop


/* DO LOOP
let myNumber = 50;
while (myNumber < 50) {
    console.log(myNumber)
    myNumber++ // += 2 to increment by 2 or more
}

do {
    console.log(myNumber);
} while (myNumber < 50)
// the do loop will run at least once
*/

/* FOR LOOP
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
*/

// let name = "Juan";
// for (let i = 0; i <= name.length; i++) {
//     console.log(name.charAt(i))
// }

let myName = "John";
let counter = 0;
let myLetter;
while (counter <= 3) { // (true)
    myLetter = myName[counter];
    console.log(myLetter);
     if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "h") break; // break is for getting out of the while loop, like in python
    counter++;
}
console.log(counter)