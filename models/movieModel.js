const mongoose = require("mongoose");
const { Subject, MoviePlatformObserver } = require("../classes/observer");

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
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  platform: {
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
// Créer une instance de Subject et enregistrer l'observateur
const subject = new Subject();
subject.subscribe(new MoviePlatformObserver());

movieSchema.post("save", function (doc) {
  doc._original = doc._original || {}; // Assurez-vous que _original est initialisé
  subject.notify(doc);
});

movieSchema.post("findOneAndUpdate", function (doc) {
  doc._original = doc._original || {}; // Assurez-vous que _original est initialisé
  subject.notify(doc);
});

module.exports = mongoose.model("Movie", movieSchema);
