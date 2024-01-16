const MovieModel = require("../models/movieModel");
const CategoryModel = require("../models/categoryModel");

class MovieController {
  async createMovie(req, res) {
    try {
      // Vérifiez si la catégorie existe
      const category = await CategoryModel.findById(req.body.category_id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      const movie = new MovieModel({
        title: req.body.title,
        director: req.body.director,
        category_id: category._id, // Utilisez l'ID de la catégorie existante
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
      const movies = await MovieModel.find().populate("category_id");
      res.status(200).json(movies);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new MovieController();
