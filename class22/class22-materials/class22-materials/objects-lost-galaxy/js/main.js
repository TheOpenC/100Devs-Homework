let mouse = {}
    mouse.tail = true
    mouse.legs = 4
    mouse.whiskers = true
    mouse.color = "brown"

    mouse.squeek = function(){
        console.log("SQEEK")
    }
    mouse.findFood = function(){
        console.log("GimmetheCheese")
    } 
    mouse.gnaw = function(){
        console.log("Gnawing")
    } 













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