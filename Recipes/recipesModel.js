const DB = require("../data/db-config");

module.exports = {
  getChefRecipes,

  add,
  update,
  remove
};

function getChefRecipes(chefId) {
  return DB("recipes").where("chef_id", "=", `${chefId}`);
}

function add(user) {}

function update(changes, id) {}

function remove(id) {}
