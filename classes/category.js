class Category {
  constructor(name) {
    this.name = name;
  }
  static create({ name }) {
    return new Category(name);
  }
}
