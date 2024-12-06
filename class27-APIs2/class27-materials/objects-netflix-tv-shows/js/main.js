//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixTvShow {
    constructor(name, time, genre, length) {
        this.name = name,
        this.time = time,
        this.genre = genre,
        this.length = length
    }
    tuneIn(){
        return `Tune into ${this.name} at ${this.time}, weekdays!`
    }

    promote(){
        return `${this.name}, the best ${this.genre} show on TV!`
    }

    promote2(){
        return `Do you actually have anything going on on weeknights at ${this.time}? No, I didn't think so. Tune into ${this.name} for ${this.length}instead! `
    }

}

let spongebob = new NetflixTvShow("spongebob", "9:30pm", "tunies", "2 hours")