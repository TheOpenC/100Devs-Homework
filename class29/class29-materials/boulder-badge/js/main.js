// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

let bulbCandy = 11;
let caterCandy = 6;
let weedleCandy = 6;
let totalCandy = bulbCandy + caterCandy + weedleCandy;  
console.log(totalCandy)
//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
function canCharmanderFight(fTemp){
    let c = whatDaTemp(fTemp)
    
    if ( c > 0){
        return `Yep he can fight. Temp is ${c}`
    } else {
        return `unfortunately it's too cold.`
    }
}
function whatDaTemp(fTemp){
    let cTemp = (fTemp - 32) * 5/9
    return cTemp
}
console.log(whatDaTemp(65))
console.log(canCharmanderFight(5))

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

let numOfPikas = prompt(`How many pikas?`)

for (let i = 0; i < numOfPikas; i++){
    console.log('Pikachu, I choose you')
    
}