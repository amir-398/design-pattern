const express = require("express");
const app = express();
const port = 3000; // Définition du port sur lequel le serveur écoutera

// Définition de la première route pour la racine de l'application
app.get("/", (req, res) => {
  res.send("Hello world"); // Envoie la réponse "Hello world" au client
  res.status(200); // Définit le code de statut HTTP 200 (OK) - Inutile ici car `send` le fait automatiquement
  //res.end("Home");  // Terminer la réponse - Ne sera pas exécuté en raison de `send`
});

// Démarrage du serveur Express et écoute sur le port spécifié
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Affiche un message dans la console lorsque le serveur démarre
});
