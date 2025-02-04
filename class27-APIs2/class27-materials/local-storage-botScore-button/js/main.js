//Create a button that adds 1 to a botScore stored in localStorage 
// if botscore doesn't exist, create it and set to 0
if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}

//on page load, set botScore to 0 if botscore doesn't exist.


//each button click runs 'addAnothaOne' funct. 
document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne(){
    let botScoreVal = +localStorage.getItem('botScore')
    botScoreVal += 1;
    localStorage.setItem('botScore', botScoreVal)
    document.querySelector('h2').innerText = botScoreVal
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