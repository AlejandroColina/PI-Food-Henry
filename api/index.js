const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Receta, Dieta } = require('./src/db')
const { data } = require('./src/axios');
const { closeSync } = require('fs');
// Syncing all the models at once.
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
      let x = 1;
      let id= `${x++}PI`

      let receta = await Receta.create({
        idReceta: id,
        nombre: 'ajiaco',
        resumenPlato: 'sopa con papa y de más',
        puntuacion: 100,
        nivelSaludable: 100,
        pasoApaso: 'UNO,DOS,TRES y sirva'
      });

      let Dieta1 = await Dieta.create({
        nombre : 'proteinica',
      });

      let Dieta2 = await Dieta.create({
        nombre : 'vegana',
      });

      let Dieta3 = await Dieta.create({
        nombre : 'frutas',
      });
      // let p = 0;
      // while (p == 0) {
      //   ++p;
      //   let dietas = [];
      //   const response = await data()
      //   response.map(e => dietas.push(e.diets));
      //   dietas = [...new Set(dietas.flat())].map(e => Dieta.create({ nombre: e }));
      //   return await Promise.all(dietas)
      // }

    } catch (error) {
      console.log(error)
    }
  })