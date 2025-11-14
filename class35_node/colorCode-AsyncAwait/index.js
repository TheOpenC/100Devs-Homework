function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Sunny')
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather){
                case 'Sunny':
                    resolve('☀️')
                    break
                case 'Cloudy':
                    resolve('🌥️')
                    break
                case 'Rainy':
                    resolve('🌧️')
                    break
                case 'Stormy':
                    resolve('🌩️')
                    break
                default:
                    reject('No icon found.')

            }
        }, 100)
    })
}

function onSuccess(data) {
    console.log(`Success ${data}`)
}

function onError(error) {
    console.log(`Error: ${error}`)
}

//Whatever data gets resolved from getWeather() gets passed to .then, in this case, 'Sunny'(which the switch statement turns into a Sun icon) is the parameter being passed to getWeatherIcon()

getWeather()
    .then(getWeatherIcon)
    .then(onSuccess, onError) //then 'Success' is passed as the promise was successful.
