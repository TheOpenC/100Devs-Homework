class MakeCar{
  constructor(make, model, color, doors){
    this.make = make
    this.model = model
    this.color = color
    this.doors = doors
  }
  honk(){
    alert('Beep Beep')
  }
  lock(){
    alert(`Locked ${this.doors} doors!`)
  }
}

let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)