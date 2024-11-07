// JSinfo - class 22
// Task 1

let user = {}; // 1
user.name = "John"; // 2
user.surname = "Smith"; // 3
user.name = "Pete" // 4
delete user.name; // 5

// Task 2
function isEmpty(obj){
    // returns true if has no properties, false otherwise
    for(let key in obj){
        return `${false}, properties exist in obj`;
    } return `${true}, no properties exist in obj`;
}
let schedule = {}
alert( isEmpty(schedule)) // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule))// false
//-----

//Task 3 Sum Object Properties

// We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.
let payroll = (obj, f) => {
    let sum = 0
    if (isEmpty(salaries) === true) {
        return `There's no cash, ${sum}.` 
    } else {
        for (let cash in salaries){
           sum += salaries[cash]
        } return `Payroll is: $${sum}`
    }
}

console.log(payroll(salaries, isEmpty()))


//Task 4 Multiply Numeric property values by 2

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
//   // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

function multiplyNumeric(obj){

    for(let key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2;
        } 
    }
}

multiplyNumeric(menu)

// OBJECT METHODS, 'this' -------


let user2 = {
    name: "John",
    age: 30
};

user2.sayHi = function() {
    alert("Hello!");
};

user2.sayHi()
