//importing express
const express = require("express");

//helps you secure the express app
const helmet = require("helmet");

const server = express();

//helps you secure the express app
server.use(helmet());

//parsing json
server.use(express.json());

//IMPORT ROUTES IN THIS SECTION
const recipesRouter = require("../Routers/recipesRouter.js");

//
//IMPLEMENTING ROUTES
//Syntax example - just uncomment and customized
server.use("/api/recipes", recipesRouter);

//root page
server.use("/", (req, res) => {
  res.status(200).send("Welcome to Chef Portfolio - Build Week");
});

//Export module for use in index.js
module.exports = server;
