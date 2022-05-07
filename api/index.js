const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {  Dieta } = require('./src/db');
const { rezetas } = require('./src/axios/rezetas');

conn.sync({ force: true })
  .then(() => {
    console.log('============================');
    console.log('Listening to BD...');
  })
  .then(() => {
    server.listen(3001, () => {
      // console.log('============================');
      console.log('Listening at 3001 for Express (index.js)');
      console.log('============================');
    });
  })

    .then(async () => {

      try {
        let dietas = [];
        rezetas?.map(e => dietas.push(e.diets));
        dietas = [...new Set(dietas.flat())]?.map(e => Dieta.create({ title: e }));
        return await Promise.all(dietas)
      } catch (error) {
        console.log(error)
      }
    })