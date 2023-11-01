// JSON: JavaScript Objet Notation

/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
It's used to send and receive data in many languages,
not only in JavaScript
*/

const myObj = {
    name: "Juancito",
    hobbies: ["drink mate", "music", "weed", "code"],
    int: 420,
    hello: function () {
        console.log("Hello!");
    }
};

console.log(myObj)
console.log(myObj.name)
myObj.hello()
console.log(typeof myObj)

const sendJSON = JSON.stringify(myObj) //static method
console.log(sendJSON)
console.log(typeof sendJSON) // string
console.log(sendJSON.name) // undefined

const receiveJSON = JSON.parse(sendJSON) //static method
console.log(receiveJSON) // we've lost the method (hello()) by converting it at the first step

