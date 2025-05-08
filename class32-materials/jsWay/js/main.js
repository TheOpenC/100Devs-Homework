class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
    }
    // Attack a target
    attack(target){
        if (this.health > 0) {
            const damage = this.strength;
            console.log(
                `${this.name} attacks ${target.name} and causes ${damage} damage points`
            );
            target.health -= damage;
            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health points left`);
            } else {
                target.health = 0;
                const bonusXP = 10;
                console.log(
                    `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
                );
                this.xp += bonusXP;
            }
        } else {
            console.log(`${this.name} can't attack (they've been eliminated)`);
        }
    }
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
    }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe())


// Aurora is harmed by an arrow
aurora.health -= 20;

//Aurora gains a strength necklace
aurora.strength += 10;

//Aurora learns a new skill
aurora.xp += 15;

console.log(aurora.describe());

console.log(glacius.describe());

class Dog {
    constructor(name, species, size) {
        this.name = name
        this.species = species
        this.size = size
    }
    describe(){
        `${this.name} is a ${this.type} dog measuring ${this.size}`
    }
    
    bark() {
        if (this.size < 50) {
            console.log(`Look, a cat! ${this.name} barks: Woof! Woof!`)
        } else {
            console.log(`Look, a cat! ${this.name} barks: Grrr! Grrr!`)
        }
    }
}

const fang = new Dog("Fang", "boarhoud", 75);
const snowy = new Dog("Snowy", "terrier", 22);

