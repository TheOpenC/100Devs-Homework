//#1

//It's possible. I thought it wasn't but I was wrong. 
//if a function returns an object, then they could both return the same externally defined object. See below: 

//let obj = {};

//function A() { return obj; }
//function B() { return obj; }

//alert( new A() == new B() ); // true


//==============================================
//#2 New Calculator: ===========================
//==============================================

// Create new Calculator
// importance: 5
// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

function Calculator(){
    this.read = function() {
        this.a = +prompt("Pick a value");
        this.b = +prompt("Pick another value");
    };         
    this.sum = function() {
        return this.a + this.b
    };
    this.mul = function(){
        return this.a * this.b
     };
};

let calculator = new Calculator();
calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Multiply = " + calculator.mul() );


//3 Create new Accumulator

// Create new Accumulator
// importance: 5
// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// Here’s the demo of the code:
function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(){
        this.value += +prompt("Add a value")
    };
};

 let accumulator = new Accumulator(1); // initial value 1

 accumulator.read(); // adds the user-entered value
 accumulator.read(); // adds the user-entered value

 alert(accumulator.value); // shows the sum of these values