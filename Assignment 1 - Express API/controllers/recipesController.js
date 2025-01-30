const Recipe = require("../models/recipe");

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ success: true, data: recipes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
