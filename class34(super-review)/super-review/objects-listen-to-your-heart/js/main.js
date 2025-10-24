//Create a stopwatch object that has four properties and three methods

let stopwatch = {}
stopwatch.currentTime = 12
stopwatch.color = 'black'
stopwatch.brand = 'nike'
stopwatch.size = 'large'
stopwatch.type = 'digital'

stopwatch.lap = function(time){
    console.log(`the current time is ${time}`)

stopwatch.tellBrand = function(brand){
    console.log(`the brand of this watch is ${brand}`)
stopwatch.explode = function(color, size, type){
    console.log(`Pieces of your ${size}, ${color}, ${type} watch go flying in all directions. This watch can no longer tell time.`)
}
}
}
stopwatch.start = function(){
    console.log(`ruuuuunn`)
}
stopwatch.stop = function(){
    console.log(`stop running`)
}


stopwatch.lap(stopwatch.currentTime)
stopwatch.tellBrand(stopwatch.brand)
stopwatch.explode(stopwatch.color, stopwatch.size, stopwatch.type)

