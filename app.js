const express = require("express");
const app = express();
const port = 3000; // Définition du port sur lequel le serveur écoutera
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swaggerConfig/swaggerConfig");
const movieRoute = require("./routes/movieRoute");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/design_patern");
app.use(express.urlencoded());
app.use(express.json());
// Définition de la première route pour la racine de l'application

const Test = require("./classes/vod");
Test.displayMovieData();

app.use("/", movieRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Démarrage du serveur Express et écoute sur le port spécifié
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Affiche un message dans la console lorsque le serveur démarre
});
