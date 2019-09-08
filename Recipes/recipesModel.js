const DB = require("../data/db-config");

module.exports = {
  getChefRecipes,
  addRecipe,
  update,
  remove
};

function getChefRecipes(chefId) {
  return DB("recipes").where("chef_id", "=", `${chefId}`);
}

function addRecipe(recipeInfo) {
  return DB("recipes").insert(recipeInfo);
}

function update(changes, id) {}

function remove(id) {}
