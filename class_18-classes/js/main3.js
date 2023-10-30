// NAMING CONVENTIONS

// this class is a "blueprint"
class pizza {
    crust = "original"; // public field
    #sauce = "traditional" // private field;
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() { //this is a method
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    yourOrder() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`)
    };
}

const myPizza = new pizza("large");
myPizza.yourOrder();
console.log(myPizza.getCrust()); //public (retrieves the value)
console.log(myPizza.sauce); //private (undefined)
console.log(myPizza.#sauce); //private (Uncaught SyntaxError: Private field '#sauce' must be declared in an enclosing class.)

// _intended to be private


/*
// FACTORY FUNCTION
function pizzaFactory(pizzaSize) {
    // Define properties of the pizza object
    const crust = "original";
    const size = pizzaSize;

    // Create and return the pizza object with a 'bake' method
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    }
}

// Create a new pizza object using the factory function
const myPizza = pizzaFactory("large");

// Call the 'bake' method on the pizza object
myPizza.bake();\
*/