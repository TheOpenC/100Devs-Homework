//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function onlyEvens(arr){
    let onlyEvens = []
    arr.forEach(num => {
        if(num % 2  == 0){
            onlyEvens.push(num)
        }
    } )
    return onlyEvens 
    }
    

console.log(onlyEvens([1, 9, 11, 12, 33, 4, 8, 24, 3]))