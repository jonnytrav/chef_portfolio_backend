const express = require("express");
const router = express.Router();
const DB = require("./recipesModel.js");

//FINDS RECIPES FOR ONE CHEF
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const recipes = await DB.getChefRecipes(id);
    res.status(200).json(recipes);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

//ADDS RECIPE TO THE DB, CHEF ID MUST BE SUPPLIED IN THE BODY OF REQUEST
router.post("/", async (req, res) => {
  const recipeInfo = req.body;
  try {
    const recipe = await DB.addRecipe(recipeInfo);
    res.status(201).json(recipe);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
