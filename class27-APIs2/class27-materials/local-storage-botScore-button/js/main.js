//Create a button that adds 1 to a botScore stored in localStorage 


//on page load, set botScore to 0 if botscore doesn't exist.
if(!localStorage.setItem('botScore', 0)) {
    localStorage.setItem('botScore', 0)
}

//each button click runs 'addAnothaOne' funct. 
document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne(){
    //get the value out of local storage and store it in botScoreVal
    let botScoreVal = Number(localStorage.getItem('botScore'))
    // add one to the variable
    botScoreVal += 1
    // set the value to whatever it was +1
    localStorage.setItem('botScore', botScoreVal)
}







// const choice = document.querySelector('input').value
// console.log(choice)



// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `https://api.nasa.gov/planetary/apod?api_key=qe6RnddBSvUmBCgjcKtOibU1gOgNnnAdG2ulxzfr&date=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         if (data.media_type === 'image'){
//           document.querySelector('img').src = data.hdurl

//         }else if(data.media_type === 'video' ){
//           document.querySelector('iframe').src = data.url
//         }
        
//         document.querySelector('h3').innerText = data.explanation
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }