/**
 * File Name: seed.js
 * Student's Name: Manoj Bishwakarma
 * Student ID: 200594681
 * Date: 2025-01-29
 */

const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");

const MONGO_URI =
  "mongodb+srv://manojbishwakarma88:manoj123@recipesdatabase.iogvl.mongodb.net/RecipeDB";

const recipes = [
  {
    recipeName: "Spaghetti Bolognese",
    ingredients: ["Pasta", "Ground Beef", "Tomato Sauce"],
    cookingTime: 30,
    difficulty: "Easy",
    cuisine: "Italian",
    description: "A classic Italian pasta dish.",
    photoLink: "https://images.pexels.com/photos/6287523/pexels-photo-6287523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.5,
  },
  {
    recipeName: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Coconut Milk"],
    cookingTime: 40,
    difficulty: "Medium",
    cuisine: "Indian",
    description: "A spicy and flavorful dish.",
    photoLink: "https://images.pexels.com/photos/27200320/pexels-photo-27200320/free-photo-of-a-bowl-of-curry-with-vegetables-and-meat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.7,
  },
  {
    recipeName: "Tacos",
    ingredients: ["Tortilla", "Beef", "Cheese", "Lettuce"],
    cookingTime: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    description: "A delicious Mexican staple.",
    photoLink: "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.6,
  },
  {
    recipeName: "Sushi",
    ingredients: ["Rice", "Fish", "Seaweed"],
    cookingTime: 50,
    difficulty: "Hard",
    cuisine: "Japanese",
    description: "A traditional Japanese dish.",
    photoLink: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.8,
  },
  {
    recipeName: "Pancakes",
    ingredients: ["Flour", "Milk", "Eggs", "Baking Powder"],
    cookingTime: 15,
    difficulty: "Easy",
    cuisine: "American",
    description: "A popular breakfast option.",
    photoLink: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.3,
  },
  {
    recipeName: "Caesar Salad",
    ingredients: ["Lettuce", "Croutons", "Caesar Dressing"],
    cookingTime: 10,
    difficulty: "Easy",
    cuisine: "Italian",
    description: "A refreshing salad with a creamy dressing.",
    photoLink: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.2,
  },
  {
    recipeName: "Lasagna",
    ingredients: ["Pasta Sheets", "Beef", "Tomato Sauce", "Cheese"],
    cookingTime: 60,
    difficulty: "Medium",
    cuisine: "Italian",
    description: "A layered pasta dish with rich flavors.",
    photoLink: "https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.7,
  },
  {
    recipeName: "Pad Thai",
    ingredients: ["Noodles", "Shrimp", "Peanuts", "Tamarind Sauce"],
    cookingTime: 30,
    difficulty: "Medium",
    cuisine: "Thai",
    description: "A famous stir-fried noodle dish from Thailand.",
    photoLink: "https://images.pexels.com/photos/5939141/pexels-photo-5939141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.6,
  },
  {
    recipeName: "BBQ Ribs",
    ingredients: ["Pork Ribs", "BBQ Sauce", "Spices"],
    cookingTime: 120,
    difficulty: "Hard",
    cuisine: "American",
    description: "Slow-cooked ribs with smoky flavors.",
    photoLink: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.8,
  },
  {
    recipeName: "Biryani",
    ingredients: ["Rice", "Chicken", "Spices"],
    cookingTime: 50,
    difficulty: "Hard",
    cuisine: "Indian",
    description: "A flavorful rice dish with spices and meat.",
    photoLink: "https://images.pexels.com/photos/17649369/pexels-photo-17649369/free-photo-of-meat-with-rice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.9,
  },
  {
    recipeName: "Pho",
    ingredients: ["Rice Noodles", "Beef", "Broth", "Herbs"],
    cookingTime: 45,
    difficulty: "Medium",
    cuisine: "Vietnamese",
    description: "A flavorful Vietnamese noodle soup.",
    photoLink: "https://images.pexels.com/photos/1265626/pexels-photo-1265626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.6,
  },
  {
    recipeName: "Falafel",
    ingredients: ["Chickpeas", "Garlic", "Parsley", "Spices"],
    cookingTime: 35,
    difficulty: "Medium",
    cuisine: "Middle Eastern",
    description: "Crispy and delicious chickpea balls.",
    photoLink: "https://images.pexels.com/photos/4046770/pexels-photo-4046770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.4,
  },
  {
    recipeName: "Kimchi Fried Rice",
    ingredients: ["Rice", "Kimchi", "Egg"],
    cookingTime: 20,
    difficulty: "Easy",
    cuisine: "Korean",
    description: "A spicy and tangy fried rice dish.",
    photoLink: "https://images.pexels.com/photos/15681166/pexels-photo-15681166/free-photo-of-food-with-fried-eggs-on-plate-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.7,
  },
  {
    recipeName: "Chow Mein",
    ingredients: ["Noodles", "Vegetables", "Soy Sauce"],
    cookingTime: 25,
    difficulty: "Easy",
    cuisine: "Chinese",
    description: "A stir-fried noodle dish with vegetables.",
    photoLink: "https://images.pexels.com/photos/5848496/pexels-photo-5848496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.5,
  },
  {
    recipeName: "Beef Stroganoff",
    ingredients: ["Beef", "Mushrooms", "Cream"],
    cookingTime: 40,
    difficulty: "Medium",
    cuisine: "Russian",
    description: "A creamy beef and mushroom dish.",
    photoLink: "https://images.pexels.com/photos/1998918/pexels-photo-1998918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.6,
  },
  {
    recipeName: "Greek Salad",
    ingredients: ["Tomatoes", "Cucumber", "Feta Cheese"],
    cookingTime: 10,
    difficulty: "Easy",
    cuisine: "Greek",
    description: "A refreshing salad with Mediterranean flavors.",
    photoLink: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.3,
  },
  {
    recipeName: "Shepherd's Pie",
    ingredients: ["Ground Lamb", "Potatoes", "Vegetables"],
    cookingTime: 60,
    difficulty: "Medium",
    cuisine: "British",
    description: "A comforting meat and potato dish.",
    photoLink: "https://images.pexels.com/photos/30391247/pexels-photo-30391247/free-photo-of-close-up-of-lemon-meringue-pie-on-green-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.7,
  },
  {
    recipeName: "Paella",
    ingredients: ["Rice", "Seafood", "Saffron"],
    cookingTime: 50,
    difficulty: "Hard",
    cuisine: "Spanish",
    description: "A famous Spanish rice dish with seafood.",
    photoLink: "https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.8,
  },
  {
    recipeName: "Gyoza",
    ingredients: ["Dumpling Wrappers", "Pork", "Cabbage"],
    cookingTime: 35,
    difficulty: "Medium",
    cuisine: "Japanese",
    description: "Japanese pan-fried dumplings.",
    photoLink: "https://images.pexels.com/photos/11661145/pexels-photo-11661145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    averageRating: 4.7,
  },
];
mongoose
  .connect(MONGO_URI)
  .then(async () => {
    // Inserting the sample recipes data into the recipes collection
    await Recipe.insertMany(recipes);
    console.log("Database seeded!");
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
