function MakeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function(){
        alert('beep beep fucker')
    }
    this.log = function(){
        alert(`locked ${this.doors} doors!`)
    }
    
}