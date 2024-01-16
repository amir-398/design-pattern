const convert = require('xml-js');
const MovieModel = require('../models/movieModel');


class Adapter {
    constructor() {
        this.jsonToXml = this.jsonToXml.bind(this);
        this.postMovieXML = this.postMovieXML.bind(this);
        this.getMovieXML = this.getMovieXML.bind(this);
    }

    jsonToXml(json) {
        return convert.js2xml(json, {compact: true, ignoreComment: true, spaces: 4});
    }

    async postMovieXML(req, res) {
        try {
            // Convert translated data to XML
            const xmlData = this.jsonToXml(req.body);
            // Send the XML data as response
            res.set("Content-Type", "text/xml");
            res.send(xmlData);
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
    }

    async getMovieXML(req, res) {
        try {
            const movies = await MovieModel.find();
            const xml = this.jsonToXml(movies);
            res.set("Content-Type", "text/xml");
            res.send(xml);
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
    }
}

module.exports = Adapter;