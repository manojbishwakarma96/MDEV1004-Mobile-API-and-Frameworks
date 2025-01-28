const express = require("express");
const { getRecipes } = require("../Controllers/recipeController");

const router = express.Router();

router.get("/", getRecipes);

module.exports = router;
