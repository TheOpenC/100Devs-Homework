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
    super(name, role, tech){
        this._role = role
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    get sayHelo(){
        console.log(`${this._name} says: 'Hello, I'm a ${this._role}, and I use ${this._tech}.`)
    }

}

class Back extends Contractor{
    super(name, role, tech){
        this._role = role
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
       console.log(`${this._name} says: 'Hello, I'm a ${this._role}, and I use ${this._tech}.`)    
    }

}

let jerry = new Front('Jerry', 'Senior Front-end Dev', 'CSS')
let carl = new Front()






// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }


