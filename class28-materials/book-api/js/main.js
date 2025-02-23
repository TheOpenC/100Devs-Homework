//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
const li = document.createElement('li');
li.textContent = localStorage.getItem('book')
document.querySelector('ul').appendChild(li)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/search.json?q=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        //put title into local storage 

        data.docs.forEach(book => {
          localStorage.setItem('book', book.title)
          const li = document.createElement('li');
          li.textContent = localStorage.getItem('book') + ' ; ' + data.title
          document.querySelector('ul').appendChild(li)
        });
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

