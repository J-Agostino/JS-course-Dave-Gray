// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied:

// window.alert("ok!")
// alert("ok")

// window.alert(window.location)
// alert(location)

const myArray = ['eat', 'sleep', 'code']

const myObject = {
    name: "Juan",
    hobbies: ['eat', 'sleep', 'code'],
    logName: function() {
        console.log(this.name)
    }
}

// const myArray = ['eat', 'sleep', 'code']

// sessionStorage.setItem("mySessionStore", myObject)
// sessionStorage.setItem("mySessionStore", myArray)
sessionStorage.setItem("mySessionStore", JSON.stringify(myObject))
localStorage.setItem("myLocalStore", JSON.stringify(myArray))

// const mySessionData = sessionStorage.getItem("mySessionStore")   || this returns a string
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"))
const myLocalData01 = JSON.parse(localStorage.getItem("myLocalStore"))
console.log(myLocalData01, "# Local")

// removing!
// localStorage.removeItem("myLocalStore") // OR localStorage.clear()

const key = localStorage.key(0)

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"))

console.log(key, "# key")
console.log(mySessionData, "# Session")
// console.log(myLocalData, "Local")
// console.log(typeof mySessionData)

// using stringify() & parse() we can retrieve the data is it is, the same type


localStorage.removeItem("myLocalStore")

console.log(myLocalData, "# Local null")