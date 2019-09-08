const DB = require("../data/db-config");

module.exports = {
  getChefRecipes,
  findById,
  add,
  update,
  remove
};

function getChefRecipes(id) {
  return DB("recipes").where("chef_id", "=", `${id}`);
}

function findById(id) {}

function add(user) {}

function update(changes, id) {}

function remove(id) {}
