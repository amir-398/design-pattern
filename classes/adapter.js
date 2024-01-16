const js2xmlparser = require("js2xmlparser");

class AdapterClass {
  static translate(data) {
    // Implement your translation logic here
    // For example:
    return {
      title: data.movie.title,
      director: data.movie.director,
      category_id: data.movie.category_id,
      releaseDate: data.movie.releaseDate,
    };
  }

  static convertToXML(jsonData) {
    try {
      return js2xmlparser.parse("movie", jsonData);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = AdapterClass;
