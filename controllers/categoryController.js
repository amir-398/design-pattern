const CategoryModel = require("../models/categoryModel");

class CategoryController {
  async createCategory(req, res) {
    try {
      const Category = new CategoryModel({
        name: req.body.name,
      });
      const newCategory = await Category.save();
      res.status(201).send(newCategory);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }

  async getAllCategories(req, res) {
    try {
      const Category = await CategoryModel.find();
      res.status(200).send(Category);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }
}

module.exports = new CategoryController();
