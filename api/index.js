//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Receta, Dieta } = require('./src/db')
// Syncing all the models at once.
conn.sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log('============================');
      console.log('Listening at 3001 (index.js)');
      console.log('============================');
    });
  })

  .then(async () => {
    try {
      const receta = await Receta.create({
        nombre: 'arroz chino',
        resumenPlato: 'Arroz oriental',
        puntuacion: 4,
        nivelSaludable: 4,
        pasoApaso: 'se agregan las verduras...'
      });
      const dieta = await Dieta.create({
        nombre: 'vegana'
      });
    } catch (error) {
      console.log(error)
    }
  })

