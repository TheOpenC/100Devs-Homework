//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixTvShow {
    constructor(show, length, genre, rating) {
        this.show = show
        this.length = length
        this.genre = genre
        this.rating = rating
    }
    watch(){
        console.log(`you are watching ${this.show}.`)
    }
    skip(){
        console.log(` you skipped all the ads! ${this.show} is now 15 min shorter.`)
    }
    favorite(){
        console.log(` wow you really like ${this.show}`)
    }   
}

let breakingBad = new NetflixTvShow('Breaking Bad', "Pretty long", "Suspense", 8)




