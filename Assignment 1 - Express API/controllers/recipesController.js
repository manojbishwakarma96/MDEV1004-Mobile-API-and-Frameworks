const recipes = [
  { id: 1, name: "Pasta", ingredients: ["flour", "eggs", "salt"] },
  { id: 2, name: "Pizza", ingredients: ["flour", "cheese", "tomato sauce"] },
];

exports.getRecipes = (req, res) => {
  res.status(200).json({ success: true, data: recipes });
};
