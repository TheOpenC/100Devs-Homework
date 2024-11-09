// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let fav = " Harney And Sons Spiced Tea "
fav = fav.trim()
console.log(fav)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let fruits = "there might be an apple"
if (fruits.search('apple') !== -1){
    console.log("yes")
} else {
    console.log('no')
}


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rPS(){
    let picker = Math.random();
    if( picker < .33){
        return 'rock'
    } else if ( picker < .66 ){
        return 'paper'
    } else {
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function userRPS(playerChoice){
    let bot = rPS()

    if( (playerChoice == "rock" && bot == "scissors") || (playerChoice === 'paper' && bot === 'rock') || (playerChoice == 'scissors' && bot == 'paper') ){
        console.log("You Win")
    } else if (playerChoice == bot) {
        console.log("You Tie")
    } else {
        console.log("You Lose")
    }

}
userRPS("rock")


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function choices(arr){
userRPS()

}

// function play(arr){
// // iterate through the array comparing the user pick to a random computer choice and moving through the array. Return the win/loss/tie after each round. 
// arr.forEach(choice=> console.log(user(choice,rockPaperScissors(numberPicker(3)))))
// }
function playGameXTimes(arr){
    arr.forEach( choice => checkWin(choice))
}

playGameXTimes(['rock', 'paper', 'scissors'])


//create an array of numbers. Sum all of the numbers. Alert the sum.

