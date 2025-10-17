//--- Easy
//create a variable and assign it a number
let num = 50;
//minus 10 from that number
num -= 10;
//print that number to the console
console.log(`intial num:`, num, ` click adds 25 = `, num + 25 );

//--- Medium
//create a variable that holds a value from the input
// let numFromInput = Number(document.querySelector('#danceDanceRevolution').value)


//add 25 to that number


//alert that number


//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', addTwo)

function addTwo(){
    let numFromInput = Number(document.querySelector('input').value)
    numFromInput += 25
    console.log(`total =`, num + numFromInput)
    
}
