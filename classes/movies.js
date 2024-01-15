class Movie {
  constructor(title, director, genre, releaseDate) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseDate = releaseDate;
  }
  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseDate}`;
  }

  static create({ title, director, genre, releaseDate }) {
    return new Movie(title, director, genre, releaseDate);
  }
}
