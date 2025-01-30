const recipes = [
  { id: 1, name: "Pasta", ingredients: ["flour", "eggs", "salt"] },
  { id: 2, name: "Pizza", ingredients: ["flour", "cheese", "tomato sauce"] },
];

exports.getRecipes = (req, res) => {
  res.status(200).json({ success: true, data: recipes });
}

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ success: true, data: recipes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
