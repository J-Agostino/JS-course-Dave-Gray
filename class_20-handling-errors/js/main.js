// Errors & Errors Handling

/* THIS WOULD WORK...
variable = "string"
console.log(variable)
*/

// THIS DOESN'T
"use strict"
/*
variable = "string"
console.log(variable)
*/


/*
const makeError = () => {
    try {
        const name = "Dave"
        name = "joe"
        throw new customError("This is a custom error!")
    } catch (err) {
        console.log(err, "log")
        console.error(err, "error") // err.name / err.message / err.stack <= great one
        console.warn(err, "warn")
        console.table(err, "table")
        // logTheError(err.stack) search for more data...
    }   
}
makeError()

function customError(message) {
    this.message = message;
    this.name = "customError"
    this.stack = `${this.name}: ${this.message}`
}
*/


/*
const makeError = () => {
    try {
        throw new customError("This is a custom error!")
    } catch (err) {
        console.log(err, "log")
        console.error(err, "error") // err.name / err.message / err.stack <= great one
        console.warn(err, "warn")
        console.table(err, "table")
        // logTheError(err.stack) search for more data...
    }   
}
makeError()

function customError(message) {
    this.message = message;
    this.name = "customError"
    this.stack = `${this.name}: ${this.message}`
}
*/

/*
const makeError = () => {
    try {
        throw new Error("This is a custom error!")
    } catch (err) {
        console.error(err.name)
        console.error(err.message) // err.name / err.message / err.stack <= great one
        console.error(err.stack)
    } 
}
makeError()

function customError(message) {
    this.message = message;
    this.name = "customError"
    this.stack = `${this.name}: ${this.message}`
}
*/


const makeError = () => {
    let i = 1
        while (i <= 5) {
            try {
                if (i%2 !== 0) {
                    throw new Error("Odd number!")
                }
            console.log("even number")
            } catch (err) {
                console.error(err.stack)
            } finally {
                console.log("...finally")
                i++
            }
        }
}
  
makeError()

function customError(message) {
    this.message = message;
    this.name = "customError"
    this.stack = `${this.name}: ${this.message}`
}