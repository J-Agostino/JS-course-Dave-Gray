// CHILD CLASSES

// this class is a "blueprint"
class pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust() { //this is a method
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}

class SpecialtyPizza extends pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} has 12 slices.`)
    }
}

const mySpecialty = new SpecialtyPizza("large");
mySpecialty.slice()

