//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


function MakeFighter(name, hair, style, color, special){
    this.fighter = name
    this.hair = hair
    this.style = style
    this.color = color
    this.special = special
    this.super = function(){
        alert(`${this.special}`)
    }
    this.log = function(){
        alert(`locked ${this.hair} doors!`)
    }
}


let Bobo = new MakeFighter ("Bobo", "Long braided", "Drunken master", "white", "MAGIC PUNCH")