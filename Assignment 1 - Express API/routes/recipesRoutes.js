/**
 * File Name: recipesRoutes.js
 * Student's Name: Manoj Bishwakarma
 * Student ID: 200594681
 * Date: 2025-01-29
 */

const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");

// Fetch recipes from the database
router.get("/", recipesController.getRecipes);

module.exports = router;
