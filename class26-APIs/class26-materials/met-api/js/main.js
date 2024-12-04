// practicing searching the Met's api

// Add click event listener to the button
document.querySelector("button").addEventListener('click', getArt);

function getArt() {
  const searchQuery = document.querySelector('input').value // get the user input
  let currentIndex = 0 //track current object index

  //fetch object IDs based on the search query
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchQuery}`)
  .then((res) => res.json())
  .then((data) => {
    if (data.objectIDs && data.objectIDs.length > 0) {
        // Start fetching object details via recursive function (below)
        findObjectWithImage(data.objectIDs);
      } else {
        throw new Error("No objects with images found.");
      }
    })
      .catch((err) => {
        console.error(`Error: ${err.message}`);
      });
      
    // Recursive function to find an object with an image
      function findObjectWithImage(objectIDs) {
        if (currentIndex >= objectIDs.length) {
          console.error("No objects with images found.");
          return;
        }

       
        const objectID = objectIDs[currentIndex++]; 
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
          .then((res) => res.json())
          .then((object) => {
            if(object.primaryImage) {
              // update the DOM with object details
              updateDOM(object);
            } else {
              //Try the next object
              findObjectWithImage(objectIDs);
            }
          })
          .catch((error)=> {
            console.error(`Error fetching object ID ${objectID}: ${err.message}`);
          });
    }

    // update the DOM with object details
    function updateDOM(object) {
      console.log(object)
      document.querySelector('h2').innerText = object.title || "No Title Available";      
      document.querySelector('img').src = object.primaryImage || '';
      document.querySelector('h3').innerText = object.artistDisplayName ||'Unknown Artist'     


    }
}


              