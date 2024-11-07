// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// function grow(x){
// let total = 1
// x.forEach(element => total *= element)
// return total 
// }

function grow(x){
  let sum = x.reduce((a, cv) => a * cv, 1)
  return sum;
}
arr = [1,2,3,4]

console.log(grow(arr));