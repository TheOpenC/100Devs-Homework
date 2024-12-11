//Example fetch using pokemonapi.co
let deckId = ''

// this is how we get a deck
fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  .then(res => res.json())
  .then(data => {
    //get and store a deck id
    console.log(data)
    deckId = data.deck_id

  })
  .catch(err => {
    console.log(`error ${err}`)
  });





// click the button, draw two cards
document.querySelector('button').addEventListener('click', drawTwo)


function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // place the two drawn cards into the DOM
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image

        let play1Val = data.cards[0].value
        let player2Val = data.cards[1].value
        if(play1Val > player2Val){
          document.querySelector('h3').innerText = 'Player 1 Wins'
        }else if(player1Val < player2Val){
           document.querySelector('h3').innerText = 'Player 2 Wins'
        }else{
          document.querySelector('h3').innerText = 'Time for War!'
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

