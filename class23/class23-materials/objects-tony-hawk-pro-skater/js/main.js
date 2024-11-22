//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function Fighter(name, style, speed, strength, agility, special){
    this.name = name
    this.style = style
    this.speed = speed
    this.strength = strength
    this.agility = agility
    this.special = special

    this.superMove = function (){
        console.log(`${this.name} used his ${this.special}`)
    }

    this.dodge = function () {
        console.log(`${this.name} used their ${this.agility} agility and ${this.speed} speed. You can't catch them!`)
    }

    this.punch = function (){
        console.log(`${this.name} has ${this.strength} strength. Their ${this.style} punch is devastating!`)
    }

}
let tonyHawkProSkater = new Fighter("Tony Hawk", 'goofy', 'blistering', 'robust', 'high', '1080 kickflip stomp')

