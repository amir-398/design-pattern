const CategoryModel = require("../models/categoryModel");

class CategoryController {
  async createCategory(req, res) {
    try {
      const Category = new CategoryModel({
        name: req.body.name,
      });
      const newCategory = await Category.save();
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getAllCategories(req, res) {
    try {
      const Categories = await CategoryModel.find();
      res.status(200).json(Categories);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new CategoryController();
