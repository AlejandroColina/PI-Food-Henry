const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Receta, Dieta } = require('./src/db')
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
      const receta1 = await Receta.create({
        nombre: 'arroz',
        resumenPlato: 'arroz blanco',
        puntuacion: 4,
        nivelSaludable: 4,
        pasoApaso: 'agua, arroz...'
      });
      const receta2 = await Receta.create({
        nombre: 'frijol',
        resumenPlato: 'frijol rojo',
        puntuacion: 4,
        nivelSaludable: 4,
        pasoApaso: 'frijol, platanos...'
      });
      const receta3 = await Receta.create({
        nombre: 'lenteja',
        resumenPlato: 'lenteja pitada',
        puntuacion: 4,
        nivelSaludable: 4,
        pasoApaso: 'lentejas, papa...'
      });
      const receta4 = await Receta.create({
        nombre: 'carne',
        resumenPlato: 'sudada',
        puntuacion: 4,
        nivelSaludable: 4,
        pasoApaso: 'carne, platano, yuca...'
      });

      const dieta1 = await Dieta.create({
        nombre: 'vegana'
      });
      const dieta2 = await Dieta.create({
        nombre: 'base carne'
      });
    } catch (error) {
      console.log(error)
    }
  })