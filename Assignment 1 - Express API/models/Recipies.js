const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  recipeName: String,
  ingredients: [String],
  cookingTime: Number,
  difficulty: String,
  cuisine: String,
  description: String,
  photoLink: String,
  averageRating: Number,
});

module.exports = mongoose.model("recipes", recipeSchema);
