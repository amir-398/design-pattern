const Movie = require("../models/movieModel");

exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie({
      title: req.body.title,
      director: req.body.director,
      category: req.body.category,
      releaseDate: req.body.releaseDate,
    });
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
