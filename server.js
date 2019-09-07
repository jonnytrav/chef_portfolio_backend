//importing express
const express = require('express');

const server = express();

//parsing json
server.use(express.json());

//root page
server.use('/', (req, res) => {
  res.status(200).send('Welcome to Chef Portfolio - Build Week');
});
