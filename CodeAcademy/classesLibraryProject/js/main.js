// Build a Library
// Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

// But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

// Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

// Book
// Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

// Movie
// Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

// CD
// Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

class Media {
  constructor(info) {
    this._title = info.title
    this._isCheckedOut = false
    this._ratings = []
  }
  get title() {
    return this._title
  }
  get isCheckedOut() {
    return this._isCheckedOut
  }
  get ratings() {
    return this._ratings
  }

  set isCheckedOut(status) {
    this._isCheckedOut = status
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this._ratings.reduce((cv, acc) => cv + acc, 0) 
    let ratingsLength = this._ratings.length
    return Math.round(ratingsSum / ratingsLength)
  }

  addRating(...rating) {
    this.ratings.push(...rating);
  }
}

// BOOKS
  class Book extends Media {
    constructor(bookData){
      super(bookData)
      this._author = bookData.author
      this._pages = bookData.pages
    }
    get author(){
      return this._author
    }
    get pages(){
      return this._pages
    }
    
  }

// MOVIES
  class Movie extends Media {
    constructor(movieData){
      super(movieData)
      this._director = movieData.director
      this._runTime = movieData.runTime
      this._cast = movieData.cast
    }
      get director() {
        return this._director
      }
      get runTime() {
        return this._runtime
      }

  }

  class CD extends Media {
    constructor(cdData) {
      super(cdData)
      this._artist = cdData.artist
      this._label = cdData.label 
    }
  }


const historyOfEverything = new Book({
  author: 'Bill Bryson',
  title: 'A Short History of Nearly Everything',
  pages: 544
});

historyOfEverything.toggleCheckoutStatus
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4,5,5)
console.log(historyOfEverything.getAverageRating())

const speed = new Movie({
  director: 'Jan de Bont',
  title: 'Speed',
  runtime: 116
});

speed.toggleCheckoutStatus
console.log(speed.isCheckedOut)
speed.addRating(1,1,5)

console.log(speed.getAverageRating())


