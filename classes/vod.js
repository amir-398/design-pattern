// La classe VOD définit la méthode factoryMethod qui doit être implémentée par les sous-classes
class VOD {
  // Permet de créer un objet de type Film
  factoryMethodCreationFilm() {
    throw new Error("Cette méthode doit être implémentée par les sous-classes");
  }

  //  crée un objet Film et retourne une chaîne de caractères.
  moviesDataByVod() {
    const film = this.factoryMethodCreationFilm();
    return `VOD: Le même code de VOD vient de fonctionner avec ${film.movieData()}`;
  }
}

// Les classes AmazonVideo, Netflix et DisneyPlus héritent de la classe VOD
// et implémentent la méthode factoryMethodCreationFilm pour retourner des objets de type Film correspondant à leur plateforme
class AmazonVideo extends VOD {
  factoryMethodCreationFilm() {
    return new FilmAmazon();
  }
}

class Netflix extends VOD {
  factoryMethodCreationFilm() {
    return new FilmNetflix();
  }
}

class DisneyPlus extends VOD {
  factoryMethodCreationFilm() {
    return new FilmDisneyPlus();
  }
}

// La classe Film définit la méthode movieData qui doit être implémentée par les sous-classes
class Film {
  movieData() {
    throw new Error("Cette méthode doit être implémentée par les sous-classes");
  }
}

// Les classes FilmAmazon, FilmNetflix et FilmDisneyPlus héritent de la classe Film
// et implémentent la méthode movieData pour définir les propriétés spécifiques à chaque plateforme, comme la catégorie et le titre du film
class FilmAmazon extends Film {
  movieData() {
    return "{Résultat du FilmAmazon : catégorie = Action, titre = Spider-Man 3}";
  }
}

class FilmNetflix extends Film {
  movieData() {
    return "{Résultat du FilmNetflix : catégorie = Coe, titre = The Office}";
  }
}

class FilmDisneyPlus extends Film {
  movieData() {
    return "{Résultat du FilmDisneyPlus : catégorie = Animation, titre = Frozen}";
  }
}

// La fonction displayMovieData prend en paramètre un objet de type VOD
// et utilise sa méthode factoryMethod pour créer un objet de type Film
function displayMovieData(vod) {
  console.log(
    "Client: Je ne connais pas la classe de VOD, mais ça marche quand même."
  );
  console.log(vod.moviesDataByVod());
}

console.log("App: Lancé avec AmazonVideo.");
displayMovieData(new AmazonVideo());
console.log("");

console.log("App: Lancé avec Netflix.");
displayMovieData(new Netflix());
console.log("");

console.log("App: Lancé avec DisneyPlus.");
displayMovieData(new DisneyPlus());

module.exports = { AmazonVideo, Netflix, DisneyPlus, displayMovieData };
