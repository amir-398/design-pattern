const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
