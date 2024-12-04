// practicing searching the Met's api

// Add click event listener to the button
document.querySelector("button").addEventListener('click', getArt);

function getArt() {
  const searchQuery = document.querySelector('input').value // get the user input
  let currentIndex = 0 //track current object index

  //fetch object IDs based on the search query
  fetch(`https://whitney.org/api/artists?q=${searchQuery}`)
  .then((res) => res.json())
  .then((data) => {

      console.log(data)
      
    
   
      })
    }
      
    // update the DOM with object details
//     function updateDOM(object) {
//       console.log(object)
//       document.querySelector('h2').innerText = object.title || "No Title Available";      
//       document.querySelector('img').src = object.primaryImage || '';
//       document.querySelector('h3').innerText = object.artistDisplayName ||'Unknown Artist'     


//     }
// }


              