const DB = require("../data/db-config.js");

module.exports = {
  findChef,
  createChef
};

function findChef(id) {
  return DB("chefs")
    .where({ id })
    .first();
}

function createChef(chefInfo) {
  return DB("chefs").insert(chefInfo);
}
