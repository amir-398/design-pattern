const MovieModel = require("../models/movieModel.js");

class MovieFactory {
static createMovies(data) {
    const { title, director, category_id, releaseDate } = data;
    return new MovieModel({ title, director, category_id, releaseDate });
}}

module.exports = MovieFactory;