//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.message)
        document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

    fetch(url)
        .then(res => res.json()) //parse response as Json
        .then(data => {
            console.log()
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
    
    