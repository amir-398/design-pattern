const MovieModel = require("../models/movieModel");

class MovieController {
  async createMovie(req, res) {
    try {
      const movie = new MovieModel({
        title: req.body.title,
        director: req.body.director,
        category_id: req.body.category,
        releaseDate: req.body.releaseDate,
      });
      const newMovie = await movie.save();
      res.status(201).json(newMovie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getAllMovies(req, res) {
    try {
      const movies = await MovieModel.find();
      res.status(200).json(movies);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new MovieController();
