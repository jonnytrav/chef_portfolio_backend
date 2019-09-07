//importing knex
const knex = require('knex');

//connecting to knex file
const config = require('../knexfile');

module.exports = knex(config.development);
