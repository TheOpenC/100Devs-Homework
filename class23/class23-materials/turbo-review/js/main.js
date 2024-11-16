// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let words = "This is a group of words?"
alert(words.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let roles = "jr.dev jr.dev jr.dev ceo ceo"
console.log(roles.replaceAll("jr.dev", "software engineer"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rPS(){
    
        let bot = Math.floor(Math.random() * 3);
        if (bot === 0){
            return `rock`
        }
        else if (bot === 1) {
            return `paper`
        }
        else {
            return `scissors`
        }
    
}

console.log(rPS())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function userRPS(bot){
    let user = prompt("pick rock, paper or scissors")

    if( (user === 'rock' && bot === "scissors") ||
    (user === 'paper' && bot === "rock") ||
    (user === 'scissors' && bot === "paper") ){
        return 'user wins'
    }
    else if (user === bot)
        {return 'Tie!'}
    else 
    {return 'bot wins'}
}
console.log(userRPS(rPS()))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.



function xTimes(arr, x){
    
    arr.forEach(pick => {
        if (pick === 'rock' && rPS() === "scissors"){
            console.log('user wins')
        }else if (pick === 'paper' && rPS() === "rock"){
            console.log('user wins')
        }else if (pick === 'scissors' && rPS() === "paper"){
            console.log('user wins')
        }else if (pick === rPS()){
            console.log('Tie!')
        }else {
            console.log('bot wins')
        }
})   
}


console.log(xTimes(["rock", "rock", "rock"], 3))