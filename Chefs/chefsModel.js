const DB = require("../data/db-config.js");

module.exports = {
  findChef,
  createChef,
  updateChef
};

function findChef(id) {
  return DB("chefs")
    .where({ id })
    .first();
}

function createChef(chefInfo) {
  return DB("chefs").insert(chefInfo);
}

function updateChef(id, newData) {
  return DB("chefs")
    .where({ id })
    .update(newData);
}
