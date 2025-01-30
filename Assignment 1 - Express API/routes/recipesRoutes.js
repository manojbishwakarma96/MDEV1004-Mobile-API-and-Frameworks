const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");

// Fetch recipes from the database
router.get("/", recipesController.getRecipes);

module.exports = router;
