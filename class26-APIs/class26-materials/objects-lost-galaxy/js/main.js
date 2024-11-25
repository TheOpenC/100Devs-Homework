//Create a pizza object that has four properties and three methods
// Object Literal
let pizza = {
}
pizza.cheese = 'mozzarella'
pizza.toppings = 'onions'
pizza.sauce = 'red'
pizza.shape  = "square"

pizza.nyStyle = function() {
    console.log(`Fold that ${this.shape} slice in half!`)
}
pizza.rat = function(){
    console.log(`A rat just stole your ${this.cheese} slice`)
}

pizza.devour = function(){
    console.log(`You just ate the whole ${this.cheese} ${this.sauce} sauce pie with ${this.toppings} in one go!`)
}


// constructor 
function MakeCar(make,model,color,doors){
    this.make = make
    this.model = model
    this.color = color
    this.doors = doors

    this.honk = function (){
        alert(`Beep Beep FUCKER`)
    }
    this.lock = function (){
        alert(`Locked ${this.doors} doors!`)
    }
}

let hondaCivic = new MakeCar(`Honda`, `Civic`, `Silver`, 4)
let teslaRoadster = new MakeCar(`Tesla`, `Roadster`, `Red`, 2)

