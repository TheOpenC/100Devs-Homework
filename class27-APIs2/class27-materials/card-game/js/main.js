//Example fetch using pokemonapi.co
let deckId = ''

// this is how we get a deck
fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  .then(res => res.json())
  .then(data => {
    //get and store a deck id
    deckId = data.deck_id

  })
  .catch(err => {
    console.log(`error ${err}`)
  });

  // on the click of the button, draw cards 
 document.querySelector('button').addEventListener('click', drawTwo)

// // get a new deck
// document.querySelector('newDeckButton').addEventListener('click', newDeck())

// function newDeck(){
//   deckId = ""
// }

 function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  console.log(deckId)
  fetch(url)
  .then(res => res.json())
  .then(data => {
    //get and store a deck id
    console.log(data)
    

    document.querySelector('#player1').src = data.cards[0].image
    document.querySelector('#player2').src = data.cards[1].image

    let player1Card = `${data.cards[0].value} of ${data.cards[0].suit}`
    let player1Val = convertToNum(data.cards[0].value)
    let player2Card = `${data.cards[1].value} of ${data.cards[1].suit}`
    let player2Val = convertToNum(data.cards[1].value)
    if (player1Val > player2Val){
      document.querySelector('h3').innerText = 'Player 1 Wins'
      console.log(`Player 1 Wins`)
    } else if(player1Val < player2Val){
      document.querySelector('h3').innerText = 'Player 2 Wins'
      console.log(`Player 2 Wins`)
    } else{
      document.querySelector('h3').innerText = 'WAR'
      console.log(`WAR`)
    }

    console.log(`\nPlayer1: ${player1Card} \nPlayer2: ${player2Card}`)
    console.log(``)
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

}

function convertToNum(val){
  
  if (val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  } else {
    return +val
  }
}














































