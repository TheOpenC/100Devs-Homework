// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".


function arrStuff(arr){
    let lastIndex = arr.length-1
    if(arr[0] < arr[lastIndex]){
        alert(`Hi`)
    }else if (arr[0] === arr[lastIndex]){
        alert(`We close in an hour`)
    } else {
        alert(`Bye`)
    }
}

arrStuff([11,3,4,11])