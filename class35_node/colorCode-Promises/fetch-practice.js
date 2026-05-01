// NYC WEATHER EXAMPLE
// async function start() {
//     const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//     const result = await data.json()
//     console.log(result.properties) 
    
// }

//start()

//WORLD TIME API EXAMPLE
const url = 'http://worldtimeapi.org/api/timezone/America/New_York' 

async function getData() {
    const response = await fetch(url)
    const data = await response.json() // if it returns a promise that is pending, it needs to be awaited too!
    console.log(data) 
}

getData()

// // News API
// //This one has a token. This is like a password or your own signature. The creator often needs to put limits on the number of times you can call this information.  

// const url2 = 'http://api.thenewsapi.com/v1/news/top?' 
// //api_token = apiosdufoaisdufoi2w3ur453 completely made up.

// async function getData2() {
//     const response2 = await fetch(url2)
//     const data2 = await response2.json() // if it returns a promise that is pending, it needs to be awaited too!
//     console.log(data2) 
// }


// getData2()


//Spotify API
//This one has a token. This is like a password or your own signature. The creator often needs to put limits on the number of times you can call this information.  Without a token, you get a 401 (chrome) or 301 (FF)

const url2 = 'http://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9' 
//api_token = apiosdufoaisdufoi2w3ur453 completely made up.

const request = new Request(url2, {
        headers: {
            'Authorization': 'Bearer'
            //a bunch of auth data exists here'
        }
    })

async function getData2() {
    try {
        const response2 = await fetch(request)
        const data2 = await response2.json() // if it returns a promise that is pending, it needs to be awaited too!
        if(response2.status !== 200){
            console.log('Success', data2) 
        } else {
            console.log('Server Error', data2.error)
        }
    } catch(error) {
        console.log('Fetch Error', error)
    }
    
    
    
}


getData2()