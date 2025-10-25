//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


class StreetFighter {
    constructor(name, style, superPower, energyLvl){
        this.name = name
        this.style = style
        this.superPower = superPower
        this.energyLvl = energyLvl
        this.intro = function(){
            console.log(`${this.name} fighting in the style of ${this.style} has entered the ring!`)
        }
        this.usesSuper = function(){
            console.log(`${this.name} uses ${this.superPower}!`)
        }
        this.block = function(){
            console.log(`${this.name} blocks the attack, they're leftt unhurt~!`)
        }

    }
}

let fooFoo = new StreetFighter('Foo Foo', 'Wildstyle', 'Bite', "high")

let barka = new StreetFighter('Barka', "Kung Fu", 'Long Kick', "god-like")