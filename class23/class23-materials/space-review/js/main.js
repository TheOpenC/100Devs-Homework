//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 3, 5, 6, 3, 12]
alert(arr.reduce((a,c) => a + c , 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
    function takesArr(arrX){
    let newArr = arrX.map(n => n**2 );
        return newArr
}

console.log(takesArr([1,3,50,3,5,0]))
//Create a function that takes string
//Print the reverse of that string to the console

function reverser(str){
   return str.split('').reverse().join('')
}
console.log(reverser('penguin'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not

let paly = str => alert(`${str}, ${str === reverser(str)}`)

paly('mellem')
paly('tree')