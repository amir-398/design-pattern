// Classe de base VOD et sous-classes
class VOD {
  constructor(movie) {
    this.movie = movie;
  }
}

class NetflixMovie extends VOD {
  constructor(movie) {
    super(movie);
    this.movie.platform = "Netflix";
  }
}

class DisneyPlusMovie extends VOD {
  constructor(movie) {
    super(movie);
    this.movie.platform = "Disney Plus";
  }
}

class AmazonPrimeMovie extends VOD {
  constructor(movie) {
    super(movie);
    this.movie.platform = "Amazon Prime";
  }
}

// Factory Method
class MovieFactory {
  static createMovie(type, movieData) {
    switch (type) {
      case "Netflix":
        return new NetflixMovie(movieData);
      case "Disney Plus":
        return new DisneyPlusMovie(movieData);
      case "Amazon Prime":
        return new AmazonPrimeMovie(movieData);
      default:
        throw new Error("Unknown platform");
    }
  }
}
