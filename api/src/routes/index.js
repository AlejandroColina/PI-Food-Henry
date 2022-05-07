const express = require('express');
const { Router } = require('express');
const { Dieta, Receta } = require('../db');
const router = Router();
const { Op } = require('sequelize');
const { findByAPI, dataApi } = require('../axios');
router.use(express.json());
const { rezetas } = require('../axios/rezetas');

function generatedIds() {
    let x = 1;
    return function () {
        return x++
    }
}

var id = generatedIds();

router.get('/recipes', async (req, res, next) => {
    try {
        const { name } = req.query;
        let recetasBD = await Receta.findAll({ include: [{ model: Dieta }] });
        if (recetasBD.length == 0 && rezetas === undefined
            || recetasBD.length == 0 && rezetas?.length == 0) return res.status(404).send('not data');
        rezetas.length ? recetasBD.push(rezetas) : recetasBD;

        if (name !== undefined) {
            let validate = recetasBD.flat().some(e => e.title.toLowerCase().includes(name.toLowerCase()));
            if (validate) {
                recetasBD = recetasBD.flat().filter(e => e.title.toLowerCase().includes(name.toLowerCase()))
                return res.status(200).json(recetasBD);
            } else {
                return res.status(404).send('No existe la receta en nuestra página.')
            }
        } else {
            return res.status(200).json(recetasBD.flat());
        }
    } catch (error) {
        next(error);
    }
});

router.get('/types', async (req, res, next) => {
    try {
        let listadoDietas = await Dieta.findAll();
        if (!listadoDietas.length) return res.status(404).send({ msg: 'Sin dietas en la base de datos' });
        return res.json(listadoDietas);
    } catch (error) {
        next(error);
    }
});

router.post('/recipe', async (req, res, next) => {
    try {

        let hayDietas = await Dieta.findAll();
        if (hayDietas.length == 0) return res.status(404).send('No hay dietas desde la API para relacionar la receta.')

        let { title, summary, spoonacularScore, healthScore, steps, diets } = req.body;

        if (!title || !summary || !diets) return res.status(404).send('Faltan datos mínimos para la creación de la receta.');
        if (typeof spoonacularScore != 'number' || typeof healthScore != 'number') return res.status(404).send('Puntuación y nivelSaludable deben ser números.');
        if (typeof title == 'string') {
            console.log('ENTRÉ A CREATE RECETA, LINEA 87 DE POST /RECIPE')
            let receta = await Receta.create({
                id: `${id()}PI`,
                title: title.toLowerCase(),
                summary: summary.toLowerCase(),
                steps: steps.toLowerCase(),
                spoonacularScore,
                healthScore,
                diets: diets
            });
            diets?.map(async dieta => await receta.setDieta(dieta));
            return res.json('¡RECETA CREADA CON ÉXITO!')
        }
        console.log('NO ENTRÉ A NINGÚN IF POST/RECIPES LINEA 99')
        return res.status(404).send('El nombre debe ser String.')
    } catch (error) {
        next(error);
    }
});

router.get('/recipes/:id', async (req, res, next) => {
    try {
        let { id } = req.params;

        id = id.toUpperCase().trim();

        if (/[P][I]$/.test(id)) {
            let dateDB = await Receta.findByPk(id);
            let join = await Dieta.findAll({
                include: [{
                    model: Receta,
                    where: { id: id }
                }]
            });
            join = join?.map(e => e.title);

            let toResponse = {
                id : dateDB.id,
                title : dateDB.title,
                summary : dateDB.summary,
                spoonacularScore : dateDB.spoonacularScore,
                healthScore : dateDB.healthScore,
                steps : dateDB.steps,
                diets : join
            }
            
            return (dateDB == null
                ? res.status(404).send('No existe el producto en la BD.')
                : res.json(toResponse));
        }

        if (!isNaN(Number(id))) {
            const searchApi = await findByAPI(id);
            return (typeof searchApi !== 'undefined' || searchApi.length !== 0
                ? res.json(searchApi)
                : res.status(404).send('Not found.'))
        }

        return res.status(400).send('TypeError in Id');

    } catch (error) {
        next('aqui',error);
    }
});

module.exports = router;




// const express = require('express');
// const { Router } = require('express');
// const { Dieta, Receta } = require('../db');
// const router = Router();
// const { Op } = require('sequelize');
// const { findByAPI, dataApi } = require('../axios');
// router.use(express.json());

// function generatedIds() {
//     let x = 1;
//     return function () {
//         return x++
//     }
// }

// var id = generatedIds();

// router.get('/recipes', async (req, res, next) => {
//     try {
//         const { name } = req.query;
//         let api = await dataApi();
//         let recetasBD = await Receta.findAll({ include: [{ model: Dieta }] });
//         if (recetasBD.length == 0 && api === undefined
//             || recetasBD.length == 0 && api?.length == 0) return res.status(404).send('not data');
//         api.length ? recetasBD.push(api) : recetasBD;

//         if (name !== undefined) {
//             let validate = recetasBD.flat().some(e => e.title.toLowerCase().includes(name.toLowerCase()));
//             if (validate) {
//                 recetasBD = recetasBD.flat().filter(e => e.title.toLowerCase().includes(name.toLowerCase()))
//                 return res.status(200).json(recetasBD);
//             } else {
//                 return res.status(404).send('No existe la receta en nuestra página.')
//             }
//         } else {
//             return res.status(200).json(recetasBD.flat());
//         }
//     } catch (error) {
//         next(error);
//     }
// });

// router.get('/types', async (req, res, next) => {
//     try {
//         let listadoDietas = await Dieta.findAll();
//         if (!listadoDietas.length) return res.status(404).send({ msg: 'Sin dietas en la base de datos' });
//         return res.json(listadoDietas);
//     } catch (error) {
//         next(error);
//     }
// });

// router.post('/recipe', async (req, res, next) => {
//     try {

//         let hayDietas = await Dieta.findAll();
//         if (hayDietas.length == 0) return res.status(404).send('No hay dietas desde la API para relacionar la receta.')

//         let { title, summary, spoonacularScore, healthScore, steps, diets } = req.body;

//         if (!title || !summary || !diets) return res.status(404).send('Faltan datos mínimos para la creación de la receta.');
//         if (typeof spoonacularScore != 'number' || typeof healthScore != 'number') return res.status(404).send('Puntuación y nivelSaludable deben ser números.');
//         if (typeof title == 'string') {
//             console.log('ENTRÉ A CREATE RECETA, LINEA 87 DE POST /RECIPE')
//             let receta = await Receta.create({
//                 id: `${id()}PI`,
//                 title: title.toLowerCase(),
//                 summary: summary.toLowerCase(),
//                 steps: steps.toLowerCase(),
//                 spoonacularScore,
//                 healthScore,
//                 diets: diets
//             });
//             diets?.map(async dieta => await receta.setDieta(dieta));
//             return res.json('¡RECETA CREADA CON ÉXITO!')
//         }
//         console.log('NO ENTRÉ A NINGÚN IF POST/RECIPES LINEA 99')
//         return res.status(404).send('El nombre debe ser String.')
//     } catch (error) {
//         next(error);
//     }
// });

// router.get('/recipes/:id', async (req, res, next) => {
//     try {
//         let { id } = req.params;

//         id = id.toUpperCase().trim();

//         if (/[P][I]$/.test(id)) {
//             let dateDB = await Receta.findByPk(id);
//             let join = await Dieta.findAll({
//                 include: [{
//                     model: Receta,
//                     where: { id: id }
//                 }]
//             });
//             join = join?.map(e => e.title);

//             let toResponse = {
//                 id : dateDB.id,
//                 title : dateDB.title,
//                 summary : dateDB.summary,
//                 spoonacularScore : dateDB.spoonacularScore,
//                 healthScore : dateDB.healthScore,
//                 steps : dateDB.steps,
//                 diets : join
//             }
            
//             return (dateDB == null
//                 ? res.status(404).send('No existe el producto en la BD.')
//                 : res.json(toResponse));
//         }

//         if (!isNaN(Number(id))) {
//             const searchApi = await findByAPI(id);
//             return (typeof searchApi !== 'undefined' || searchApi.length !== 0
//                 ? res.json(searchApi)
//                 : res.status(404).send('Not found.'))
//         }

//         return res.status(400).send('TypeError in Id');

//     } catch (error) {
//         next(error);
//     }
// });

// module.exports = router;



// aqui, axios, index