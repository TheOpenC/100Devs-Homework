//Create a constructor with 4 properties and 3 methods
function Pizza(shape, sauce, meat, crust){
    this.shape = shape
    this.sauce = sauce  
    this.meat = meat
    this.crust = crust 
    this.deliveryTime = function(){
        alert('calculating')
}
    this.happiness = function(){
        alert('you are feeling much happier')
}
    this.cheesiness = function(){
        alert('ssssuuuuuper cheeeesy')
    }
}

let sicilian = new Pizza('square', 'red', 'meaty', 'thick')

let nyStyle = new Pizza('circle', 'white', 'no', 'thin')
