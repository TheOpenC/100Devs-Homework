// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let drink = "water";
drink = drink.trim();

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let stringOfWords = "This is a string of randowm worlds";
let check = stringOfWords.includes("apple");
console.log(check)



// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function numberPicker(num){
    return Math.floor(Math.random()* num);
}

function rockPaperScissors(pickedNumber){
    if (pickedNumber === 0){
        return "rock"
    } else if (pickedNumber === 1){
        return "paper"
    } else if (pickedNumber === 2){
        return "scissors"
    } else {
        return "something is wrong..."
    }
}

console.log(rockPaperScissors(numberPicker(3)));

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let choice = prompt("Pick rock, paper or scissors", );
function user(choice, rockPaperScissors){
    if ((choice === "rock" && rockPaperScissors === "scissors")||
        (choice === "scissors" && rockPaperScissors === "paper")||
        (choice === "paper" && rockPaperScissors === "rock")){
            return `you win, computer picked: ${rockPaperScissors}`
    } else if (choice === rockPaperScissors){
        return "tie"
    } else {
        return `computer picked: ${rockPaperScissors}, you lose`
    }
}
console.log(user(choice, rockPaperScissors(numberPicker(3))));


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


// function play(arr){
// // iterate through the array comparing the user pick to a random computer choice and moving through the array. Return the win/loss/tie after each round. 
// arr.forEach(choice=> console.log(user(choice,rockPaperScissors(numberPicker(3)))))
// }

function prePicks(){
    let numOfGames = prompt("How many games would you like to play?", )
    let userPicks = "";
    let choices = [];
    for(i=0; i < numOfGames; i++){
        userPicks = prompt("Pick rock, paper, or scissors", );
        choices.push(userPicks)     
    }
    choices.forEach(choice => console.log(user(choice,rockPaperScissors(numberPicker(3)))))
}


prePicks(); 

//create an array of numbers. Sum all of the numbers. Alert the sum.

let nums = [42,19,77,33,57]

let sum = nums.reduce( (acc, c) => acc + c, 0 )

