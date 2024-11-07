//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeStreetFighter(fighterName, fighterOrigin, fighterPower, fighterStyle){
    this.name = fighterName
    this.origin = fighterOrigin
    this.power = fighterPower
    this.style = fighterStyle
    this.special = function (){
        console.log(`This is my special move!!!!!`)
    }
    this.secret = function (){
        console.log(`This is my secret move`)
    }
    this.stylePoints = function (){
        console.log(`FEAR MY ${this.style} STYLE!!! `)
    }
} 

let ryu = new MakeStreetFighter("Ryu", "American", "High", "Karate")