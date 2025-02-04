//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    let list = document.querySelector('.drink-list');
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse json
    .then(data => {
        console.log(data)
        list.innerText = ""
        let drinks = data.drinks;
        let drink = data.drinks[0]
      
        drinks.map(cocktail => {
            const drinkItem = document.createElement('li');
            drinkItem.textContent = `Drink: ${cocktail.strDrink}`
            list.appendChild(drinkItem)
            }
        )
        document.querySelector("h2").innerText = drink.strDrink
        document.querySelector("h3").innerText = drink.strInstructions
        document.querySelector("img").src = drink.strDrinkThumb

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

