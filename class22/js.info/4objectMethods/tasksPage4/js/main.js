//#1 
// Using "this" in object literal
// importance: 5
// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result? 
// it returns nothing  -- this is called as a function 


// #2 Create a calculator
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
let calculator = {
    read(){
        calculator.a = Number(prompt("please enter a value"));
        calculator.b = Number(prompt("enter another value"));
    },
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this.b
    }
};
calculator.read();
alert(`sum: ${calculator.sum()}`);
alert(`multiply: ${calculator.mul()}`);

//#3

// There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};
// Now, if we need to make several calls in sequence, we can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0