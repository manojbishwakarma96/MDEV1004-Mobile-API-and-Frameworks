const express = require("express");
const app = express();
const recipesRoutes = require("./routes/recipesRoutes");

const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://manojbishwakarma88:manoj123@recipesdatabase.iogvl.mongodb.net/";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
app.use(express.json());

app.use("/recipes", recipesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
