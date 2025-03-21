//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
<<<<<<< HEAD
class Espresso{
    constructor(color, make, model, price) {
        this.color = color 
        this.make = make
        this.model = model
        this.price = price
    } 
    turnOn(){
        console.log(`Good day, I am now on!`)
    }
    steam(){
        console.log(`ITSSS SUMMER SALE 59 %%%%%%`)
    }
    brew(){
        console.log(`Good Stuff coming your way.`)
    }
}

let gaggia = new Espresso(`red`, `Gaggia`, `Classic Pro`, 400)
=======

class Espresso {
 constructor(make, brand, material, power) {
    this.make = make
    this.brand = brand
    this.material = material
    this.power = power
 } 
    boil () {
        `you are now boiling water with ${power}`
    }
    turnOn (){
        `you turned on your beautiful ${brand} ${make}.`
    }
    froth (){
        `time to make nice creamy milk for you coffee.`
    }
}

let laMarzacco = new Espresso('v1', 'La Marzacco', 'stainless', 'gas')
>>>>>>> 97bd185 (class 31 hw)
