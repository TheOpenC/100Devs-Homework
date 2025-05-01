//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
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
