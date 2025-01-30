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
    photoLink: "https://example.com/spaghetti.jpg",
    averageRating: 4.5,
  },
  {
    recipeName: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Coconut Milk"],
    cookingTime: 40,
    difficulty: "Medium",
    cuisine: "Indian",
    description: "A spicy and flavorful dish.",
    photoLink: "https://example.com/chicken-curry.jpg",
    averageRating: 4.7,
  },
  {
    recipeName: "Tacos",
    ingredients: ["Tortilla", "Beef", "Cheese", "Lettuce"],
    cookingTime: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    description: "A delicious Mexican staple.",
    photoLink: "https://example.com/tacos.jpg",
    averageRating: 4.6,
  },
  {
    recipeName: "Sushi",
    ingredients: ["Rice", "Fish", "Seaweed"],
    cookingTime: 50,
    difficulty: "Hard",
    cuisine: "Japanese",
    description: "A traditional Japanese dish.",
    photoLink: "https://example.com/sushi.jpg",
    averageRating: 4.8,
  },
  {
    recipeName: "Pancakes",
    ingredients: ["Flour", "Milk", "Eggs", "Baking Powder"],
    cookingTime: 15,
    difficulty: "Easy",
    cuisine: "American",
    description: "A popular breakfast option.",
    photoLink: "https://example.com/pancakes.jpg",
    averageRating: 4.3,
  },
  {
    recipeName: "Caesar Salad",
    ingredients: ["Lettuce", "Croutons", "Caesar Dressing"],
    cookingTime: 10,
    difficulty: "Easy",
    cuisine: "Italian",
    description: "A refreshing salad with a creamy dressing.",
    photoLink: "https://example.com/caesar-salad.jpg",
    averageRating: 4.2,
  },
  {
    recipeName: "Lasagna",
    ingredients: ["Pasta Sheets", "Beef", "Tomato Sauce", "Cheese"],
    cookingTime: 60,
    difficulty: "Medium",
    cuisine: "Italian",
    description: "A layered pasta dish with rich flavors.",
    photoLink: "https://example.com/lasagna.jpg",
    averageRating: 4.7,
  },
  {
    recipeName: "Pad Thai",
    ingredients: ["Noodles", "Shrimp", "Peanuts", "Tamarind Sauce"],
    cookingTime: 30,
    difficulty: "Medium",
    cuisine: "Thai",
    description: "A famous stir-fried noodle dish from Thailand.",
    photoLink: "https://example.com/pad-thai.jpg",
    averageRating: 4.6,
  },
  {
    recipeName: "BBQ Ribs",
    ingredients: ["Pork Ribs", "BBQ Sauce", "Spices"],
    cookingTime: 120,
    difficulty: "Hard",
    cuisine: "American",
    description: "Slow-cooked ribs with smoky flavors.",
    photoLink: "https://example.com/bbq-ribs.jpg",
    averageRating: 4.8,
  },
  {
    recipeName: "Biryani",
    ingredients: ["Rice", "Chicken", "Spices"],
    cookingTime: 50,
    difficulty: "Hard",
    cuisine: "Indian",
    description: "A flavorful rice dish with spices and meat.",
    photoLink: "https://example.com/biryani.jpg",
    averageRating: 4.9,
  },
  {
    recipeName: "Pho",
    ingredients: ["Rice Noodles", "Beef", "Broth", "Herbs"],
    cookingTime: 45,
    difficulty: "Medium",
    cuisine: "Vietnamese",
    description: "A flavorful Vietnamese noodle soup.",
    photoLink: "https://example.com/pho.jpg",
    averageRating: 4.6,
  },
  {
    recipeName: "Falafel",
    ingredients: ["Chickpeas", "Garlic", "Parsley", "Spices"],
    cookingTime: 35,
    difficulty: "Medium",
    cuisine: "Middle Eastern",
    description: "Crispy and delicious chickpea balls.",
    photoLink: "https://example.com/falafel.jpg",
    averageRating: 4.4,
  },
  {
    recipeName: "Kimchi Fried Rice",
    ingredients: ["Rice", "Kimchi", "Egg"],
    cookingTime: 20,
    difficulty: "Easy",
    cuisine: "Korean",
    description: "A spicy and tangy fried rice dish.",
    photoLink: "https://example.com/kimchi-fried-rice.jpg",
    averageRating: 4.7,
  },
  {
    recipeName: "Chow Mein",
    ingredients: ["Noodles", "Vegetables", "Soy Sauce"],
    cookingTime: 25,
    difficulty: "Easy",
    cuisine: "Chinese",
    description: "A stir-fried noodle dish with vegetables.",
    photoLink: "https://example.com/chow-mein.jpg",
    averageRating: 4.5,
  },
  {
    recipeName: "Beef Stroganoff",
    ingredients: ["Beef", "Mushrooms", "Cream"],
    cookingTime: 40,
    difficulty: "Medium",
    cuisine: "Russian",
    description: "A creamy beef and mushroom dish.",
    photoLink: "https://example.com/beef-stroganoff.jpg",
    averageRating: 4.6,
  },
  {
    recipeName: "Greek Salad",
    ingredients: ["Tomatoes", "Cucumber", "Feta Cheese"],
    cookingTime: 10,
    difficulty: "Easy",
    cuisine: "Greek",
    description: "A refreshing salad with Mediterranean flavors.",
    photoLink: "https://example.com/greek-salad.jpg",
    averageRating: 4.3,
  },
  {
    recipeName: "Shepherd's Pie",
    ingredients: ["Ground Lamb", "Potatoes", "Vegetables"],
    cookingTime: 60,
    difficulty: "Medium",
    cuisine: "British",
    description: "A comforting meat and potato dish.",
    photoLink: "https://example.com/shepherds-pie.jpg",
    averageRating: 4.7,
  },
  {
    recipeName: "Paella",
    ingredients: ["Rice", "Seafood", "Saffron"],
    cookingTime: 50,
    difficulty: "Hard",
    cuisine: "Spanish",
    description: "A famous Spanish rice dish with seafood.",
    photoLink: "https://example.com/paella.jpg",
    averageRating: 4.8,
  },
  {
    recipeName: "Gyoza",
    ingredients: ["Dumpling Wrappers", "Pork", "Cabbage"],
    cookingTime: 35,
    difficulty: "Medium",
    cuisine: "Japanese",
    description: "Japanese pan-fried dumplings.",
    photoLink: "https://example.com/gyoza.jpg",
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
