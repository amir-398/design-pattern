const MovieModel = require("../models/movieModel.js");

class MovieFactory {
  static createMovie(data) {
    const { title, director, category, releaseDate } = data;
    return new MovieModel({ title, director, category, releaseDate });
  }
}

module.exports = MovieFactory;