// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Contractor{
    constructor(name, role) {
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`${this._name} says: 'Hello, I'm a ${this._role}.`)
    }
}

class Front extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, its me, ${this._name} and I work on the Front-End.`)
    }

}

class Back extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, its me, ${this._name} and I work on the Back-End.`)
    }

}

let machi = new Front('The Machine', 'Front-end', 'React')
let jerry = new Front('Jerry', 'Senior Front-end Dev', 'CSS')




// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }


