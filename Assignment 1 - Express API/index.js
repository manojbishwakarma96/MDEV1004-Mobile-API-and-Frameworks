const express = require("express");
const app = express();
const recipesRoutes = require("./routes/recipesRoutes");
app.use(express.json());

app.use("/recipes", recipesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
