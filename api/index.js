const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {  Diet } = require('./src/db');
const { rezetas } = require('./src/axios/rezetas');

conn.sync({ force: true })
  .then(() => {
    console.log('============================');
    console.log('Listening to BD...');
  })
  .then(() => {
    server.listen(3001, () => {
      console.log('Listening at 3001 for Express (index.js)');
      console.log('============================');
    });
  });