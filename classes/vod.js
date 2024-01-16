// La classe VOD définit la méthode factoryMethod qui doit être implémentée par les sous-classes
class VOD {
  factoryMethod() {
    throw new Error("Cette méthode doit être implémentée par les sous-classes");
  }

  someOperation() {
    const film = this.factoryMethod();
    return `VOD: Le même code de VOD vient de fonctionner avec ${film.operation()}`;
  }
}

// Les classes AmazonVideo, Netflix et DisneyPlus héritent de la classe VOD
// et implémentent la méthode factoryMethod pour retourner des objets de type Film correspondant à leur plateforme
class AmazonVideo extends VOD {
  factoryMethod() {
    return new FilmAmazon();
  }
}

class Netflix extends VOD {
  factoryMethod() {
    return new FilmNetflix();
  }
}

class DisneyPlus extends VOD {
  factoryMethod() {
    return new FilmDisneyPlus();
  }
}

// La classe Film définit la méthode operation qui doit être implémentée par les sous-classes
class Film {
  operation() {
    throw new Error("Cette méthode doit être implémentée par les sous-classes");
  }
}

// Les classes FilmAmazon, FilmNetflix et FilmDisneyPlus héritent de la classe Film
// et implémentent la méthode operation pour définir les propriétés spécifiques à chaque plateforme, comme la catégorie et le titre du film
class FilmAmazon extends Film {
  operation() {
    return "{Résultat du FilmAmazon : catégorie = Action, titre = Mission Impossible}";
  }
}

class FilmNetflix extends Film {
  operation() {
    médi;
    return "{Résultat du FilmNetflix : catégorie = Coe, titre = The Office}";
  }
}

class FilmDisneyPlus extends Film {
  operation() {
    return "{Résultat du FilmDisneyPlus : catégorie = Animation, titre = Frozen}";
  }
}

// La fonction clientCode prend en paramètre un objet de type VOD
// et utilise sa méthode factoryMethod pour créer un objet de type Film
function clientCode(vod) {
  console.log(
    "Client: Je ne connais pas la classe de VOD, mais ça marche quand même."
  );
  console.log(vod.someOperation());
}

console.log("App: Lancé avec AmazonVideo.");
clientCode(new AmazonVideo());
console.log("");

console.log("App: Lancé avec Netflix.");
clientCode(new Netflix());
console.log("");

console.log("App: Lancé avec DisneyPlus.");
clientCode(new DisneyPlus());
