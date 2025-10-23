// *Variables*
// Create a variable and console log the value
let n = Number(10);

// Create a variable, add 10 to it, and alert the value
n+= 10;
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subs4NumsAndAlert(n1, n2, n3, n4){
    return n1-n2-n3-n4
}
alert(subs4NumsAndAlert(10, 9, 8,7))
// Create a function that divides one number by another and returns the remainder
function dividesAndReturnRemainder(n1, n2){
    return n1%n2
}
console.log(dividesAndReturnRemainder(100, 23))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addsTwoNums(n1, n2){
    if(n1+n2 > 100){
        alert(`Jumanji`)
    }
}
addsTwoNums(100, 1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplys3Nums(n1, n2, n3){
    if(n1 * n2 * n3 % 3 == 0){
        alert(`ZEBRA`)
    }
}
multiplys3Nums(3, 3, 3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNum(w,n){
    for(i=0; i < n; i++){
        console.log(w)
    }
}
wordAndNum('tire', 8)