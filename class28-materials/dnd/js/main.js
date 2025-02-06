//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  const spell = document.querySelector("h2")
  const classChar = document.querySelector("h3")
  const subClassChar = document.querySelector("h4")




  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        spell.innerText = data.index
        classChar.innerText = data.classes[0].name
        subClassChar.innerText = "Sub Classes:"

        data.subclasses.forEach(element => {
            console.log(element.name)
            subClassChar.innerText += `\n${element.name} `
        });
           
      
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

