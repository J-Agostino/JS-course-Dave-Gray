// CLASSES

class pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
    getToppings() {
        return this.toppings;
    }
    setToppings(topping) {
        this.toppings.push(topping);
    }
    // get pizzaCrust() {
    //     return this.crust;
    // }
    // set pizzaCrust(pizzaCrust) {
    //     this.crust = pizzaCrust
    // }
    bake() { // no need for function() keyword
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`)
    }
}

const myPizza = new pizza("vegetarian", "medium");
myPizza.setCrust("thin")
// myPizza.pizzaCrust = "thin"
myPizza.bake();
myPizza.setToppings("Avocado");
myPizza.setToppings("Olives");
console.log(myPizza.getToppings())