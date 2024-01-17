/**
 * @openapi
 * /movies:
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
 *               - category_id
 *               - type
 *               - releaseDate
 *             properties:
 *               title:
 *                 type: string
 *                 description: Le titre du film
 *                 default: "Five Nights at Freddy's"
 *               director:
 *                 type: string
 *                 description: Le réalisateur du film
 *                 default: "Emma Tammi"
 *               category:
 *                 type: string
 *                 description: La catégorie du film
 *                 default: "Horreur"
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 description: La date de sortie du film
 *               type:
 *                 type: string
 *                 description: Le type de film (Netflix, Disney Plus, Amazon Prime)
 *                 default: "Netflix"
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
    * /movies/netflix:
 *   get:
 *     tags:
 *       - Movie
 *     summary: Récupère tous les films de Netflix
 *     description: Renvoie une liste de tous les films de Netflix
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
  * /movies/disneyplus:
 *   get:
 *     tags:
 *       - Movie
 *     summary: Récupère tous les films de Disney+
 *     description: Renvoie une liste de tous les films de Disney+
 *     responses:
 *       200:
 *         description: Liste des films récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       500:
 *         description: Erreur serveur
 * /movies/amazonprime:
 *   get:
 *     tags:
 *       - Movie
 *     summary: Récupère tous les films de Amazon Prime
 *     description: Renvoie une liste de tous les films de Amazon Prime
 *     responses:
 *       200:
 *         description: Liste des films récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       500:
 *         description: Erreur serveur
 * /movies/filter:
 *   get:
 *     tags:
 *       - Movie
 *     summary: Récupère les films par catégorie et plateforme
 *     description: Renvoie une liste de films filtrée par catégorie et plateforme
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: La catégorie du film
 *       - in: query
 *         name: platform
 *         schema:
 *           type: string
 *         description: La plateforme du film
 *     responses:
 *       200:
 *         description: Liste des films récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       500:
 *         description: Erreur serveur
* /movies/{movieId}:
*   put:
*     tags:
*       - Movie
*     summary: Modifie un film
*     description: Modifie un film dans la base de données
*     parameters:
*       - in: path
*         name: movieId
*         schema:
*           type: string
*         required: true
*         description: L'identifiant du film
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - title
*               - director
*               - category_id
*               - type
*               - releaseDate
*             properties:
*               title:
*                 type: string
*                 description: Le titre du film
*                 default: "Five Nights at Freddy's"
*               director:
*                 type: string
*                 description: Le réalisateur du film
*                 default: "Emma Tammi"
*               category:
*                 type: string
*                 description: La catégorie du film
*                 default: "Horreur"
*               releaseDate:
*                 type: string
*                 format: date
*                 description: La date de sortie du film
*               type:
*                 type: string
*                 description: Le type de film (Netflix, Disney Plus, Amazon Prime)
*                 default: "Amazon Prime"
*     responses:
*       '200':
*         description: Film modifié avec succès
*       '400':
*         description: Requête invalide
*       '404':
*         description: Film non trouvé
*     servers:
*       - url: http://localhost:3000/movies
 */
/**
 * @openapi
  * /movieXML:
 *   post:
 *     tags:
 *       - Movie
 *     summary: Crée un nouveau film (XML)
 *     description: Ajoute un nouveau film à la base de données en format XML
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Le titre du film
 *                 default: "Five Nights at Freddy's"
 *               director:
 *                 type: string
 *                 description: Le réalisateur du film
 *                 default: "Emma Tammi"
 *               category:
 *                 type: string
 *                 description: La catégorie du film
 *                 default: "Horreur"
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 description: La date de sortie du film
 *               type:
 *                 type: string
 *                 description: Le type de film (Netflix, Disney Plus, Amazon Prime)
 *                 default: "Netflix"
 *     responses:
 *       201:
 *         description: Film créé avec succès
 *         content:
 *           application/xml:
 *             example: "<movie><title>Movie Title</title><director>Director Name</director></movie>"
 *       400:
 *         description: Requête invalide
 *   get:
 *     tags:
 *       - Movie
 *     summary: Récupère tous les films (XML)
 *     description: Renvoie une liste de tous les films en format XML
 *     responses:
 *       200:
 *         description: Liste des films récupérée avec succès
 *         content:
 *           application/xml:
 *             example: "<movies><movie><title>Movie Title</title><director>Director Name</director></movie></movies>"
 *       500:
 *         description: Erreur serveur
 * /category:
 *   post:
 *     tags:
 *       - Category
 *     summary: Crée une nouvelle catégorie
 *     description: Ajoute une nouvelle catégorie à la base de données
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Le nom de la catégorie
 *                 default: "Horreur"
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *       400:
 *         description: Requête invalide
 *   get:
 *     tags:
 *       - Category
 *     summary: Récupère toutes les catégories
 *     description: Renvoie une liste de toutes les catégories
 *     responses:
 *       200:
 *         description: Liste des catégories récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *       500:
 *         description: Erreur serveur
 */