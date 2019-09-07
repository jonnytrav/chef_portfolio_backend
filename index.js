//importing server file
const server = require('./server');

//listening on port
const port = 7500;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
