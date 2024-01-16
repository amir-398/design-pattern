// MovieController
const Movie = require("../models/movieModel");
const MovieFactory = require("./vod");

class MovieController {
  static async createMovie(req, res) {
    try {
      const { type, title, director, releaseDate, categories } = req.body;
      const movieData = new Movie({ title, director, releaseDate, categories });
      const vodMovie = MovieFactory.createMovie(type, movieData);

      const newMovie = await vodMovie.movie.save();
      res.status(201).json(newMovie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getAllMovies(req, res) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getMoviesByPlatform(req, res, platform) {
    try {
      const movies = await Movie.find({ platform: platform });
      res.status(200).json(movies);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getNetflixMovies(req, res) {
    return this.getMoviesByPlatform(req, res, "Netflix");
  }

  static async getDisneyPlusMovies(req, res) {
    return this.getMoviesByPlatform(req, res, "Disney Plus");
  }

  static async getAmazonPrimeMovies(req, res) {
    return this.getMoviesByPlatform(req, res, "Amazon Prime");
  }
}

// vu que les classes sont en static on export la classe antant que tel et pas en instance !
module.exports = MovieController;
