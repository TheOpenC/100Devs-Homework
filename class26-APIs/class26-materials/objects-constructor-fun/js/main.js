//Create a constructor with 4 properties and 3 methods
function MakePizza (cheese, toppings, crust, shape ){
    this.cheese = cheese
    this.toppings = toppings
    this.crust = crust
    this.shape = shape

    this.NyStyle = function (){
        console.log(`Fold that ${this.shape} slice in half!`)
    }
    this.rat = function(){
        console.log(`A rat just stole your ${this.cheese} slice`)
    }
    this.devour = function(){
        console.log(`You just ate the whole ${this.cheese} ${this.crust} pie with ${this.toppings} in one go!`)
    }
}

let chicagoStyle = new MakePizza("Mozarella", "mushrooms", "deep dish", "round")