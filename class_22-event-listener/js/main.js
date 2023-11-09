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

    /*
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
    */

/* TOGGLE STYLES
    view.addEventListener("click", (event) => {
        // view.classList.add("purple")
        // view.classList.remove("darkblue")
        view.classList.toggle("purple")
        view.classList.toggle("darkblue") // toggle() will switch them 
    }, false)

    div.addEventListener("click", (event) => {
        // event.stopPropagation()

        div.classList.toggle("blue")
        div.classList.toggle("black")
    }, false)

    h2.addEventListener("click", (event) => {
        // event.stopPropagation()
        const myText = event.target.textContent
        myText === "My 2nd View" 
        ? event.target.textContent = "I've changed" 
        : event.target.textContent = "My 2nd View"
    }, false)
*/

    view.addEventListener("click", (event) => {
        // view.classList.add("purple")
        // view.classList.remove("darkblue")
        view.classList.toggle("purple")
        view.classList.toggle("darkblue") // toggle() will switch them 
    }, false)

    div.addEventListener("click", (event) => {
        // event.stopPropagation()

        div.classList.toggle("blue")
        div.classList.toggle("black")
    }, false)

    h2.addEventListener("click", (event) => {
        // event.stopPropagation()
        const myText = event.target.textContent
        myText === "My 2nd View" 
        ? event.target.textContent = "I've changed" 
        : event.target.textContent = "My 2nd View"
    }, false)

    const nav = document.querySelector("nav")
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100")
    })
    nav.addEventListener("mouseout", (evet) => {
        event.target.classList.remove("height100")
    })
}