// EVENT LISTENERS

const view = document.querySelector("#view2")
const div = view.querySelector("div")
const h2 = div.querySelector("h2")

// SYNTAX: addEventListener(event, function, useCapture) useCapture = false by default


/* EXAMPLE 1
//function
const doSomething = () => {
    alert("Doing something")
}

// add event
h2.addEventListener("click", doSomething, false) 

// remove an event
h2.removeEventListener("click", doSomething, false)

h2.addEventListener("click", (event) => {
    console.log(event.target)
    event.target.textContent = "Don't touch me"
})
*/

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: Complete")
        initApp() //to load other event listeners, once that now the page is ready
    }
})

const initApp = () => {
    const view = document.querySelector("#view2")
    const div = view.querySelector("div")
    const h2 = div.querySelector("h2")

view.addEventListener("click", (event) => {
    // event.stopPropagation()
    view.style.backgroundColor = "purple"
}, false)

div.addEventListener("click", (event) => {
    event.stopPropagation()

    div.style.backgroundColor = "blue"
}, false)

h2.addEventListener("click", (event) => {
    event.stopPropagation()
    event.target.textContent = "I've changed"
}, false)
}