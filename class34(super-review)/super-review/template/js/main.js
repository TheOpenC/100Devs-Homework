function MakeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function(){
        alert(`beep beep fucker`)
    }
    this.lock = function(){
        alert(`locked ${this.doors} doors`)
    }
}

let hondaCivic = new MakeCar('Honda', 'Civic', 'red', 4)

let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'red', 2)

