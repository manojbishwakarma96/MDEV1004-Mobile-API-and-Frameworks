/**
 * File: seeding.js
 * Author: Manoj Bishwakarma
 * Date: Jan 28, 2025
 * Description: Script to seed the MongoDB database with 20 initial recipes.
 */

const mongoose = require("mongoose");
const Recipe = require("../models/recipeModel");

const mongoURI = "mongodb+srv://manojbishwakarma88:manoj123@recipesdatabase.iogvl.mongodb.net/";

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB for seeding"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

const seedRecipes = async () => {
  const recipes = [
    {
      recipeName: "Pasta",
      ingredients: ["flour", "eggs", "salt"],
      cookingTime: 20,
      difficulty: "Easy",
      cuisine: "Italian",
      description: "A simple pasta dish",
      photoLink: "https://example.com/pasta.jpg",
      averageRating: 4.5
    },
    {
      recipeName: "Pizza",
      ingredients: ["flour", "cheese", "tomato sauce"],
      cookingTime: 30,
      difficulty: "Medium",
      cuisine: "Italian",
      description: "A delicious cheesy pizza",
      photoLink: "https://example.com/pizza.jpg",
      averageRating: 5.0
    },
    {
      recipeName: "Sushi",
      ingredients: ["rice", "vinegar", "fish"],
      cookingTime: 40,
      difficulty: "Hard",
      cuisine: "Japanese",
      description: "Fresh sushi rolls",
      photoLink: "https://example.com/sushi.jpg",
      averageRating: 4.8
    },
    {
      recipeName: "Tacos",
      ingredients: ["tortilla", "beef", "lettuce", "cheese"],
      cookingTime: 25,
      difficulty: "Medium",
      cuisine: "Mexican",
      description: "Tasty beef tacos",
      photoLink: "https://example.com/tacos.jpg",
      averageRating: 4.2
    },
    {
      recipeName: "Ramen",
      ingredients: ["noodles", "broth", "egg"],
      cookingTime: 35,
      difficulty: "Hard",
      cuisine: "Japanese",
      description: "Warm and savory ramen",
      photoLink: "https://example.com/ramen.jpg",
      averageRating: 4.6
    },
    {
      recipeName: "Burger",
      ingredients: ["bun", "beef patty", "cheese", "lettuce"],
      cookingTime: 20,
      difficulty: "Easy",
      cuisine: "American",
      description: "Juicy cheeseburger",
      photoLink: "https://example.com/burger.jpg",
      averageRating: 4.7
    },
    {
      recipeName: "Caesar Salad",
      ingredients: ["romaine lettuce", "croutons", "parmesan cheese"],
      cookingTime: 15,
      difficulty: "Easy",
      cuisine: "Italian",
      description: "Classic Caesar salad",
      photoLink: "https://example.com/caesarsalad.jpg",
      averageRating: 4.3
    },
    {
      recipeName: "Pad Thai",
      ingredients: ["rice noodles", "peanuts", "shrimp"],
      cookingTime: 30,
      difficulty: "Medium",
      cuisine: "Thai",
      description: "Flavorful Pad Thai",
      photoLink: "https://example.com/padthai.jpg",
      averageRating: 4.9
    },
    {
      recipeName: "Fried Rice",
      ingredients: ["rice", "egg", "soy sauce"],
      cookingTime: 15,
      difficulty: "Easy",
      cuisine: "Chinese",
      description: "Quick and tasty fried rice",
      photoLink: "https://example.com/friedrice.jpg",
      averageRating: 4.1
    },
    {
      recipeName: "Butter Chicken",
      ingredients: ["chicken", "butter", "tomato sauce"],
      cookingTime: 40,
      difficulty: "Medium",
      cuisine: "Indian",
      description: "Rich and creamy butter chicken",
      photoLink: "https://example.com/butterchicken.jpg",
      averageRating: 5.0
    },
    {
      recipeName: "Fish and Chips",
      ingredients: ["fish fillet", "potatoes", "batter"],
      cookingTime: 30,
      difficulty: "Medium",
      cuisine: "British",
      description: "Classic fish and chips",
      photoLink: "https://example.com/fishchips.jpg",
      averageRating: 4.4
    },
    {
      recipeName: "Pho",
      ingredients: ["beef", "noodles", "broth"],
      cookingTime: 50,
      difficulty: "Hard",
      cuisine: "Vietnamese",
      description: "Authentic Vietnamese pho",
      photoLink: "https://example.com/pho.jpg",
      averageRating: 4.8
    },
    {
      recipeName: "Falafel",
      ingredients: ["chickpeas", "herbs", "spices"],
      cookingTime: 25,
      difficulty: "Medium",
      cuisine: "Middle Eastern",
      description: "Crispy falafel balls",
      photoLink: "https://example.com/falafel.jpg",
      averageRating: 4.6
    },
    {
      recipeName: "Dim Sum",
      ingredients: ["dumpling wrappers", "pork filling"],
      cookingTime: 45,
      difficulty: "Hard",
      cuisine: "Chinese",
      description: "Delicate dim sum dumplings",
      photoLink: "https://example.com/dimsum.jpg",
      averageRating: 4.7
    },
    {
      recipeName: "Paella",
      ingredients: ["rice", "seafood", "saffron"],
      cookingTime: 60,
      difficulty: "Hard",
      cuisine: "Spanish",
      description: "Flavor-packed seafood paella",
      photoLink: "https://example.com/paella.jpg",
      averageRating: 4.9
    },
    {
      recipeName: "Gnocchi",
      ingredients: ["potatoes", "flour", "cheese"],
      cookingTime: 35,
      difficulty: "Medium",
      cuisine: "Italian",
      description: "Soft potato gnocchi",
      photoLink: "https://example.com/gnocchi.jpg",
      averageRating: 4.4
    },
    {
      recipeName: "Croissant",
      ingredients: ["flour", "butter", "yeast"],
      cookingTime: 90,
      difficulty: "Hard",
      cuisine: "French",
      description: "Flaky croissants",
      photoLink: "https://example.com/croissant.jpg",
      averageRating: 4.8
    },
    {
      recipeName: "Shakshuka",
      ingredients: ["eggs", "tomato sauce", "spices"],
      cookingTime: 25,
      difficulty: "Easy",
      cuisine: "Middle Eastern",
      description: "Spicy and savory shakshuka",
      photoLink: "https://example.com/shakshuka.jpg",
      averageRating: 4.5
    },
    {
      recipeName: "Biryani",
      ingredients: ["rice", "chicken", "spices"],
      cookingTime: 60,
      difficulty: "Hard",
      cuisine: "Indian",
      description: "Fragrant and flavorful biryani",
      photoLink: "https://example.com/biryani.jpg",
      averageRating: 5.0
    },
    {
      recipeName: "Lasagna",
      ingredients: ["pasta sheets", "cheese", "meat sauce"],
      cookingTime: 90,
      difficulty: "Hard",
      cuisine: "Italian",
      description: "Hearty and delicious lasagna",
      photoLink: "https://example.com/lasagna.jpg",
      averageRating: 4.9
    }
  ];

  try {
    await Recipe.insertMany(recipes);
    console.log("Recipes seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding recipes:", error);
  }
};

seedRecipes();
