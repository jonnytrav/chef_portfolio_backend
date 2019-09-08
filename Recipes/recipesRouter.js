const express = require("express");
const router = express.Router();
const DB = require("./recipesModel.js");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const recipes = await DB.getChefRecipes(id);
    res.status(200).json(recipes);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
