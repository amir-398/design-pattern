const express = require("express");
const router = express.Router();
const Movie = require("../classes/movie");
const CategoryController = require("../controllers/categoryController");
// VOD

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

router.route("/movies").post(Movie.createMovie);
router.route("/movies").get(Movie.getAllMovies);

router
  .route("/movies/netflix")
  .get((req, res) => Movie.getNetflixMovies(req, res));
router
  .route("/movies/disneyplus")
  .get((req, res) => Movie.getDisneyPlusMovies(req, res));
router
  .route("/movies/amazonprime")
  .get((req, res) => Movie.getAmazonPrimeMovies(req, res));

// router
//   .route("/category")
//   .post(CategoryController.createCategory)
//   .get(CategoryController.getAllCategories);

module.exports = router;
