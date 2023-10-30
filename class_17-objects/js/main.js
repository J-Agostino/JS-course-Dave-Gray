// Objects

/*
// key-value pairs {} and comma separated values
const myObj = {name: "Dave"};
const anotherObj = {
    alive: true,
    answer: 420,
    hobbies: ["code", "sth", "weed"],
    moreObj: {
        nested1: "im nested",
        nested2: "im nested too",
    },
    action: function() {
        // return "Hello world!"
        return `Time for ${this.hobbies[2]}!` // KEYWORD `this.`  refeers to the object
    }
}

console.log(anotherObj)
// console.log(anotherObj.hobbies[2])
console.log(anotherObj["alive"]) // with brakets we need " quotes "
// console.log(anotherObj["moreObj"."nested1"]) // with brakets we need " quotes "

// CALL A FUNCTION
console.log(anotherObj.action()) 
*/


/* inheritance test
//obj constructor
const vehicle = {
    wheels: 4,
    engine: function() {
        return "car noice";
    },
}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels, "wheels"); // inheritance
console.log(truck.engine(), "(engine sound)"); // inheritance

const car = Object.create(vehicle);

car.doors = 4;
car.engine = function() { return "Anothcer car noice"}
console.log(car.engine())

const tesla = Object.create(car);
console.log(tesla.wheels)
tesla.engine = function() {return "quiete sound"}
console.log(tesla.engine())
*/

// keys & values
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};


/* 
console.log(Object.keys(band));
console.log(Object.values(band));

// Loops: for in loop
for (let job in band) {
    // console.log(band[job]); returns the values
    console.log(`On ${job} it's ${band[job]}!`);
}

// ADD STUFF
band.keyboards = "Paul McCartney";
console.log(band.keyboards, band)


// DELETEING

delete band.drums;
console.log(band.hasOwnProperty("drums"))
*/


// destructuring objects
const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable, myBass)

const { guitar, bass, drums, vocals} = band;
console.log(guitar)
console.log(vocals)

function sings({vocals}) {return `${vocals} sings!`}
console.log(sings(band));
// mind blowing