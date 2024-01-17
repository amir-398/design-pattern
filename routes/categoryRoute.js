const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/categoryController");

router
  .route("/category")
  .post(CategoryController.createCategory)
  .get(CategoryController.getAllCategories);

module.exports = router;
