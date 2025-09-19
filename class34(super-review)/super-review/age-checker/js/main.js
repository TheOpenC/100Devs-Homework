//Create a conditonal that checks their age

let h1 = document.querySelector('h1')
h1.addEventListener('click', ageCheck)

function ageCheck(){
    let age = document.querySelector('input').value
    let statement = ''
//If under 16, tell them they can not drive
 if (age < 16) {
    statement = "you can't drive."
 }
//If under 18, tell them they can't hate from outside the club, because they can't even get in
 else if(age < 18){
    statement = "you can't hate from outside the club cause you can't even get in."
 }
//If under 21, tell them they can not drink
else if(age < 21){
    statement = "you cant drink"
}

//If under 25, tell them they can not rent cars affordably
else if(age < 25){
    statement = "you can't rent cars affordably"
}

//If under 30, tell them they can not rent fancy cars affordably
else if(age < 30){
    statement = " you can't rent fancy cars affordably"
}

//If under over 30, tell them there is nothing left to look forward too
else if(age >= 30){
    statement = "There's nothing left to look forward to"
}

document.querySelector('p').textContent = statement
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
