// MovieController
const Movie = require("../models/movieModel");
const MovieFactory = require("./vod");

class MovieController {
  static async createMovie(req, res) {
    try {
      const { type, title, director, releaseDate, category_id } = req.body;
      const movieData = new Movie({
        title,
        director,
        releaseDate,
        category_id,
      });
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

  static async getMoviesByCategoryAndPlatform(req, res) {
    try {
      const { category_id, platform } = req.query;
      console.log(category_id);
      console.log(platform);
      const movies = await Movie.find({
        category_id: category_id,
        platform: platform,
      }).populate("category_id");

      res.status(200).json(movies);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async updateMovie(req, res) {
    try {
      const { movieId } = req.params;
      const { type, title, director, releaseDate, category_id } = req.body;

      // Recherche du film existant
      const movie = await Movie.findById(movieId);
      if (!movie) {
        return res.status(404).json({ message: "Film non trouvé" });
      }

      // Mise à jour des données du film
      movie.title = title || movie.title;
      movie.director = director || movie.director;
      movie.releaseDate = releaseDate || movie.releaseDate;
      movie.category_id = category_id || movie.category_id;
      // permets de sauvegarder la valeur initiale
      movie._original = movie.toObject();
      // Utilisation de la Factory pour appliquer la logique de plateforme
      const vodMovie = MovieFactory.createMovie(type, movie);

      // Enregistrement des modifications
      const updatedMovie = await vodMovie.movie.save();
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

// vu que les classes sont en static on export la classe antant que tel et pas en instance !
module.exports = MovieController;
