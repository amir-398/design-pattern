const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController");
const CategoryController = require("../controllers/categoryController");
const Adapter = require('../classes/adapterXML');
const adapter = new Adapter();

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

  router
  .route("/movieXML")
  .post(adapter.postMovieXML)
  .get(adapter.getMovieXML);
  
router
  .route("/category")
  .post(CategoryController.createCategory)
  .get(CategoryController.getAllCategories);

module.exports = router;
