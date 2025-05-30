// School Catalogue
// Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

// We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

// School
// Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
// Getters: all properties have getters
// Setters: the numberOfStudents property has a setter
// Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
// Primary
// Includes everything in the School class, plus one additional property
// Properties: pickupPolicy (string)
// Middle
// Does not include any additional properties or methods
// High
// Includes everything in the School class, plus one additional property
// Properties: sportsTeams (array of strings)
// If you’re looking for a challenge, create the constructor() and getters for the four classes above. Then, use the setter and methods specifications in steps five, six, and seven to finish the project.

// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

class School {
  constructor(info){
    this._name = info.name
    this._level = info.level
    this._numberOfStudents = info.numberOfStudents
  }
  get name() {
    return this._name
  }
  get level() {
    return this._level
  }
  get numberOfStudents() {
    return this._numberOfStudents
  }
  set numberOfStudents(totalStudents){
    return typeof totalStudents === 'number' ?
      this._numberOfStudents = totalStudents
      : `Invalid input: numberOfStudents must be a number`    
    }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)

  }
  pickSubstituteTeacher(...substituteTeachers) {
    let subs = []
    subs.push(...substituteTeachers)
    return subs[Math.floor(Math.random() * subs.length)]

  }
}

class Primary extends School{
    constructor(info){
      super(info)
      this._pickupPolicy = info.pickupPolicy
  }
  get pickupPolicy(){
    return this._pickupPolicy
  }
}

class Middle extends School{
  constructor(info){
    super(info)
  }
}

class High extends School{
  constructor(info){
    super(info)
    this._sportsTeams = info.sportsTeams
  }
  get sportsTeams() {
    console.log(this._sportsTeams)
    return this._sportsTeams
  }
}


const lorraineHansbury = new Primary ({
  level: 'Primary',
  name: 'Lorraine Hansbury',
  numberOfStudents: 514,
  pickupPolicy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
})

lorraineHansbury.quickFacts()
console.log(lorraineHansbury.pickSubstituteTeacher('Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'))

const alSmith = new High({
  name: 'Al E. Smith',
  numberOfStudents: 415,
  sportsTeams: ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
})

alSmith.sportsTeams
