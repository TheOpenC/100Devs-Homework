//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/search.json?q=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        data.docs.forEach(book => {
          const li = document.createElement('li');
          li.textContent = book.title
          document.querySelector('ul').appendChild(li)
          
        });
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

