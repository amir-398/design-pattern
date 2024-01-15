class Movie {
  constructor(title, director, category, releaseDate) {
    this.title = title;
    this.director = director;
    this.category = category; // Ici, 'category' est un objet Category
    this.releaseDate = releaseDate;
  }

  getOverview() {
    return `${this.title}, a ${this.category.name} film directed by ${this.director}, released in ${this.releaseDate}`;
  }

  static create({ title, director, category, releaseDate }) {
    return new Movie(title, director, new Category(category), releaseDate);
  }
}
