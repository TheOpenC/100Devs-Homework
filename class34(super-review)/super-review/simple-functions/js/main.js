//---Easy
//create a function that subtracts two numbers and alerts the difference
function subsTwoNums(n1, n2){
    let total = n1 - n2;
    return total
}
alert(subsTwoNums(10, 3))
//create a function that divides three numbers and console logs the quotient
function dividesThreeNums(n1, n2, n3){
    let total = n1 / n2 / n3;
    return total
}
console.log(dividesThreeNums(100, 5, 4))

//create a function that multiplys three numbers and returns the product
function multiplyThreeNums(n1, n2, n3) {
    let total = n1 * n2 * n3
    return total
}
console.log(multiplyThreeNums(2, 4, 5))

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takesThreeNums(n1, n2, n3){
    let total = n1 + n2;
    return total % n3
}
console.log(takesThreeNums(10,30, 7))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takesFourNums(n1, n2, n3, n4){
    let total = n1 * n2;
    if (total > 100){
        total += n3 + n4;
        console.log(total)
    } else if (total < 100){
        total -= n3 + n4;
        console.log(total)
    } else if (total == 100){
        alert((n1 * n2 * n3)%n4)
    }
}
takesFourNums(100, 2, 3, 4)