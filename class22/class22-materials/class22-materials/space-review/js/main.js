//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,3,5,3,44,5,88,7]
alert(arr.reduce((a, cv) => a + cv, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function newArr(arr){
    let sqrd = arr.map((num) => num*num)
    return sqrd
}

newArr([2,3,4,5,6])

//Create a function that takes string
//Print the reverse of that string to the console
function reversed(str){
    let reversed = Array.from(str).reverse().join("")
    console.log(reversed)
}

reversed("Hi Mom")
//Create a function that takes in a string
//Alert if the string is a palindrome or not

function pal(str){
    let reversed = Array.from(str).reverse().join("")
    reversed === str ? console.log("Palindrome!") : console.log("Not")
}

pal("cantilope")