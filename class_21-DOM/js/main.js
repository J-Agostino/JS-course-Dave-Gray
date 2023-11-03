// DOM - Document Object Model

// SELECT BY ID
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2")
console.log(view2)


// CHANGE THE STYLE \ css properties 
view1.style.display = "flex" // invert them to show one or the other - use "flex" in both to show both
view2.style.display = "none"

// MORE SELECTING
// retrieves a COLLECTION
const views = document.getElementsByClassName("view")
console.log(views)  

//retrieves NODES
const sameViews = document.querySelectorAll(".view")
console.log(sameViews)

/*
HTML COLLECTIONS IS COMPOSED BY ELEMENTES, A NODE LIST HAS NODES. 
NODES ARE EVERYTHIN. WITHE SPACE, TEXT INSIDE AN ELEMENT. THERE ARE MORE NODES THAN ELEMENTS IN A WEBSITE
*/

// TAG
const divs = view1.querySelectorAll("div")
console.log(divs)
const sameDivs = view1.getElementsByTagName("div")
console.log(sameDivs)


const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs)

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue"
    // evenDivs[i].style.width = "200px"
    // evenDivs[i].style.height = "200px"
}


const navText = document.querySelector("nav h1")
console.log(navText)
navText.textContent = "I've change this using JS"

const navBar = document.querySelector("nav")
navBar.innerHTML = `<h1>Ups..</h1> <p>This is at right</p>`
console.log(navBar)
navBar.style.justifyContent = "space-around" // 'flex-start', 'flex-end', 'space-evenly', 'space-between', 'space-around'

console.log(evenDivs[0])
console.log(evenDivs[0].parentElement)
console.log(evenDivs[0].parentElement.children) // DOM tree
console.log(evenDivs[0].parentElement.childNodes) 
console.log(evenDivs[0].parentElement.hasChildNodes()) 
console.log(evenDivs[0].parentElement.lastChild) 
console.log(evenDivs[0].parentElement.lastElementChild) 
console.log(evenDivs[0].parentElement.firstChild) 
console.log(evenDivs[0].parentElement.firstElementChild) 
console.log(evenDivs[0].nextSibling)
console.log(evenDivs[0].nextElementSibling) // ...log(evenDivs[0].nextElementSibling.nextElementSibling) and so on
console.log(evenDivs[0].previousSibling)
console.log(evenDivs[0].previousElementSibling)

view1.style.display = "none"
view2.style.display = "flex"
view2.style.flexDirection = "row"
view2.style.flexWrap = "wrap"
view2.style.margin = "10px"


// removing nodes. CLEARS A PAGE
while (view2.lastChild) {
    view2.lastChild.remove()
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div")
    newDiv.textContent = iter
    newDiv.style.backgroundColor = "#000"
    newDiv.style.width = "100px"
    newDiv.style.height = "100px"
    newDiv.style.margin = "10px"
    newDiv.style.display = "flex"
    newDiv.style.justifyContent = "center"
    newDiv.style.alignItems = "center"
    parent.append(newDiv)
}

// createDivs(view2, "i'm a square")
for (let i = 1; i <= 12; i++) {
    createDivs(view2, i)
}