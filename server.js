//importing express
const express = require('express');

const server = express();

//parsing json
server.use(express.json());

//IMPORT ROUTES IN THIS SECTION
//1st route

//
//IMPLEMENTING ROUTES
//Syntax example - just uncomment and customized
//server.use('/anyRoute',routeName)
//

//root page
server.use('/', (req, res) => {
  res.status(200).send('Welcome to Chef Portfolio - Build Week');
});

//Export module for use in index.js
module.exports = server;
