const express = require("express");
const { getRecipes } = require("../controllers/recipesController");
const router = express.Router();
router.get("/getRecipe", getRecipes);
module.exports = router;
