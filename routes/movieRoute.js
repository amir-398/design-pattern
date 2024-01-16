const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController");
const CategoryController = require("../controllers/categoryController");
const AdapterClass = require("../classes/adapter.js");
const Adapter = require('../classes/adapterXML');
const adapter = new Adapter();
const Movie = require('../models/movieModel');


/**
 * @openapi
 * /movie:
 *   post:
 *     tags:
 *       - Movie
 *     summary: Crée un nouveau film
 *     description: Ajoute un nouveau film à la base de données
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - director
 *               - releaseDate
 *             properties:
 *               title:
 *                 type: string
 *                 description: Le titre du film
 *               director:
 *                 type: string
 *                 description: Le réalisateur du film
 *               category:
 *                 type: string
 *                 description: La catégorie du film
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 description: La date de sortie du film
 *     responses:
 *       201:
 *         description: Film créé avec succès
 *       400:
 *         description: Requête invalide
 *   get:
 *     tags:
 *       - Movie
 *     summary: Récupère tous les films
 *     description: Renvoie une liste de tous les films
 *     responses:
 *       200:
 *         description: Liste des films récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     description: Le titre du film
 *                   director:
 *                     type: string
 *                     description: Le réalisateur du film
 *                   category:
 *                     type: string
 *                     description: La catégorie du film
 *                   releaseDate:
 *                     type: string
 *                     format: date
 *                     description: La date de sortie du film
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Date de création de l'enregistrement
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: Date de la dernière mise à jour de l'enregistrement
 *       500:
 *         description: Erreur serveur
 */
router
  .route("/movie")
  .post(MovieController.createMovie)
  .get(MovieController.getAllMovies);


router.post("/movieXML", (req, res) => {
  try {
    // Translate JSON to your desired format
    const translatedData = AdapterClass.translate(req.body);

    // Convert translated data to XML
    const xmlData = AdapterClass.convertToXML(translatedData);

    // Send the XML data as response
    res.set("Content-Type", "text/xml");
    res.send(xmlData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  const movies = await Movie.find();
const xml = adapter.jsonToXml(movies);
res.set('Content-Type', 'text/xml');
res.send(xml);
});


router
  .route("/category")
  .post(CategoryController.createCategory)
  .get(CategoryController.getAllCategories);

module.exports = router;
