//Create a dog object that has four properties and three methods
let dog = {
    name: "carl",
    hair: "brown",
    tail: "long",
    legs: 3,
    bark() {
        return "woof woof"
    },
    wag() {
      return `${this.name} wags their tail`
    },
    run(){
        return `${this.name} is running on ${this.legs} legs!`
    }

}

