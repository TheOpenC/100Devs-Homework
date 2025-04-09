// // Context a multiplayer RPG

// const aurora = {
//     name: "Aurora",
//     health: 150,
//     strength: 25,
//     xp: 0,

//     // Return the character description
//     describe(){
//         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
//     }
// };

// // Aurora is harmed by an arrow
// aurora.health -= 20;

// //Aurora gains a strength necklace
// aurora.strength += 10

// //Aurora learns a new skill
// aurora.xp += 15;

// console.log(aurora.describe());


// const glacius = {
//     name: "Glacius",
//     health: 130, 
//     strength: 30,
//     xp: 0,

//     // Return the character description
//     describe() {
//         return `${this.name} has ${this.health} health points, ${this.strength} as a strength and ${this.xp} XP points`;
//     }
// };

class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0; /// xp for new chars starts at 0.
    }
    //return the char description
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
    }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora gains a strength necklace
aurora.strength += 10;

//Aurora learns a new skill
aurora.xp += 15;

