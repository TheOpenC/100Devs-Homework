//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function mixItUp(arr) {
    return arr.reverse()
}
console.log(mixItUp(['pika', 'charzard', 'bulba', 'squirtle']))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function squaresABiggerThanBCube (a, b) {
    return a.reduce((ac, cv) => ac + cv**2, 0) > b.reduce((ac, cv) => ac + cv**3, 0)
}

console.log(squaresABiggerThanBCube([5,5,6], [4,10,2]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function indexMultipleOfNum(arr) {
    return arr.filter((num, index) => num % index === 0 )
}
console.log(indexMultipleOfNum([22, -6, 32, 82, 9, 25]))


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumAll(arr){
    return  arr.reduce((ac, cv) => ac + (+cv), 0)
}

console.log(sumAll([3,"1",4,3,6,'2','4',4]))