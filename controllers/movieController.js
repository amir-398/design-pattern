const MovieModel = require("../models/movieModel.js");
const CategoryModel = require("../models/categoryModel");
const MovieFactory = require("../classes/movies.js");
const xml2js = require("xml2js");
const AdapterClass = require("../classes/adapter.js");

class MovieController {
  async createMovie(req, res) {
    try {
      // Vérifiez si la catégorie existe
      const category = await CategoryModel.findById(req.body.category_id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      const movieData = {
        title: req.body.title,
        director: req.body.director,
        category_id: category._id,
        releaseDate: req.body.releaseDate,
      };

      const movie = MovieFactory.createMovies(movieData);


      const newMovie = await movie.save();
      res.status(201).json(newMovie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getAllMovies(req, res) {
    try {
      const movies = await MovieModel.find().populate("category_id");
      res.status(200).send(movies);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }

  async createMovieXML(req, res) {
    try {
      const parser = new xml2js.Parser();
      parser.parseString(req.body, async (err, result) => {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
          const movieData = AdapterClass.translate(result);
          const movie = MovieFactory.createMovie(movieData);
          const newMovie = await movie.save();
          res.status(201).json(newMovie);
        }
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new MovieController();
