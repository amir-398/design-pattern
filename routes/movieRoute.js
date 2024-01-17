const express = require("express");
const router = express.Router();
const Movie = require("../classes/movie");
const CategoryController = require("../controllers/categoryController");
const Adapter = require("../classes/adapterXML");
const adapter = new Adapter();
// VOD

router.route("/movies").post(Movie.createMovie);
router.route("/movies").get(Movie.getAllMovies);
router.route("/movies/:movieId").put(Movie.updateMovie);

router
  .route("/movies/netflix")
  .get((req, res) => Movie.getNetflixMovies(req, res));
router
  .route("/movies/disneyplus")
  .get((req, res) => Movie.getDisneyPlusMovies(req, res));
router
  .route("/movies/amazonprime")
  .get((req, res) => Movie.getAmazonPrimeMovies(req, res));

router
  .route("/movies/filter")
  .get((req, res) => Movie.getMoviesByCategoryAndPlatform(req, res));

router.route("/movieXML").post(adapter.postMovieXML).get(adapter.getMovieXML);

module.exports = router;
