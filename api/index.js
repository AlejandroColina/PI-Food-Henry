const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Receta, Dieta } = require('./src/db')
const { dataApi } = require('./src/axios');
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
      // let x = 1;
      // let id= `${x++}PI`

      // let receta = await Receta.create({
      //   idReceta: id,
      //   title: 'ajiaco',
      //   summary: 'sopa con papa y de más',
      //   spoonacularScore: 100,
      //   healthScore: 100,
      //   steps: 'UNO,DOS,TRES y sirva'
      // });

      // let Dieta1 = await Dieta.create({
      //   title : 'proteinica',
      // });

      // let Dieta2 = await Dieta.create({
      //   title : 'vegana',
      // });

      // let Dieta3 = await Dieta.create({
      //   title : 'frutas',
      // });
      let p = 0;
      while (p == 0) {
        ++p;
        let dietas = [];
        const response = await dataApi()
        response?.map(e => dietas.push(e.diets));
        dietas = [...new Set(dietas.flat())]?.map(e => Dieta.create({ title: e }));
        return await Promise.all(dietas)
      }

    } catch (error) {
      console.log(error)
    }
  })