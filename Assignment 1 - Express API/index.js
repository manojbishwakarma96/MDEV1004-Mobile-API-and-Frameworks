/**
 * File Name: seeding.js
 * Student's Name: Manoj Bishwakarma
 * Student ID: 200594681
 * Date: 2025-01-29
 */

const express = require("express");
const app = express();
const recipesRoutes = require("./routes/recipesRoutes");

const mongoose = require("mongoose");

// MongoDB URI for connecting to the database

const mongoURI =
  "mongodb+srv://manojbishwakarma88:manoj123@recipesdatabase.iogvl.mongodb.net/RecipesDB";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

app.use(express.json());

app.use("/api/recipes", recipesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // Handling connection errors

  console.log(`Server is running on port ${PORT}`);
});
