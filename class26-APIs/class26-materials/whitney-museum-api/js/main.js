// practicing searching the Met's api

// Add click event listener to the button
document.querySelector("button").addEventListener('click', getArt);

function getArt() {
  const searchQuery = document.querySelector('input').value // get the user input
 
  const urls = [
    `https://whitney.org/api/artworks`,
    `https://whitney.org/api/artists`
  ]

  //fetch object IDs based on the search query
  Promise.all(urls.map(url => fetch(url).then(res => res.json())))
   // res is the 'response' object returned by fetch
  .then((data) => {
    console.log(searchQuery)
    console.log('artworks:', data)
     console.log('artists:', data[1])

    console.log(data[0].data.filter(artwork => {
      artwork.attributes.title.includes(searchQuery)
    }));
    
    // const artworks = data
    // const artists = data[1]
   
    

    // if(artists.data && artists.data.length > 0) {
    //   // sort the data by artist
      
    //   const sortedData = artists.data.sort((a, b) => {
    //     const nameA = a.attributes.display_name.toUpperCase(); // Ignore Case
    //     const nameB = b.attributes.display_name.toUpperCase(); // Ignore Case
    //     return nameA.localeCompare(nameB);
    //   });

      // Log the sorted data to the console
  //     sortedData.forEach((artist) => {
  //       console.log(`Name: ${artist.attributes.display_name}`);
  //       console.log("Associated Data:", artist);
  //     });
  //   } else {
  //     console.log('No results found for your search query.');
  //   }
  // })




  // .catch((err) => {
  //   console.error(`Error: ${err}`);
  // });
})
      
    // update the DOM with object details
//     function updateDOM(object) {
//       console.log(object)
//       document.querySelector('h2').innerText = object.title || "No Title Available";      
//       document.querySelector('img').src = object.primaryImage || '';
//       document.querySelector('h3').innerText = object.artistDisplayName ||'Unknown Artist'     


//     }
} 