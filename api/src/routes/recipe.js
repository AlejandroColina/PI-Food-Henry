const express = require('express');
const { Router } = require('express');
const { Diet, Recipe } = require('../db');
const router = Router();
router.use(express.json());

function generatedIds() {
    let x = 1;
    return function () {
        return x++
    }
}
var id = generatedIds();

router.post('/', async (req, res, next) => {
    try {

        let hayDietas = await Diet.findAll();

        if (hayDietas.length == 0) return res.status(404).send('No hay dietas desde la API para relacionar la receta.')

        let { title, summary, spoonacularScore, healthScore, steps, diets } = req.body;

        if (!title || !summary || !diets) return res.status(404).send('Faltan datos mínimos para la creación de la receta.');
        if (typeof spoonacularScore != 'number' || typeof healthScore != 'number') return res.status(404).send('Puntuación y nivelSaludable deben ser números.');
        if (typeof title == 'string') {
            console.log('ENTRÉ A CREATE RECETA, LINEA 87 DE POST /RECIPE')
            let receta = await Recipe.create({
                id: `${id()}PI`,
                title: title.toLowerCase(),
                summary: summary.toLowerCase(),
                steps: steps.toLowerCase(),
                spoonacularScore,
                healthScore,
                diets: diets
            });
            diets?.map(async dieta => await receta.setDiets(dieta));
            return res.json('¡RECETA CREADA CON ÉXITO!')
        }
        console.log('NO ENTRÉ A NINGÚN IF POST/RECIPES LINEA 99')
        return res.status(404).send('El nombre debe ser String.')
    } catch (error) {
        next(error);
    }
});


// function generatedIds() {
//     let x = 1;
//     return function () {
//         return x++
//     }
// }

// var id = generatedIds();

// router.post('/', async (req, res, next) => {
//     try {

//         let hayDietas = await Diet.findAll();
//         if (hayDietas.length == 0) return res.status(404).send('No hay dietas desde la API para relacionar la receta.')

//         let { title, summary, spoonacularScore, healthScore, steps, diets } = req.body;

//         if (!title || !summary || !diets) return res.status(404).send('Faltan datos mínimos para la creación de la receta.');
//         if (typeof spoonacularScore != 'number' || typeof healthScore != 'number') return res.status(404).send('Puntuación y nivelSaludable deben ser números.');
//         if (typeof title == 'string') {
//             console.log('ENTRÉ A CREATE RECETA, LINEA 87 DE POST /RECIPE')
//             let receta = await Recipe.create({
//                 id: `${id()}PI`,
//                 title: title.toLowerCase(),
//                 summary: summary.toLowerCase(),
//                 steps: steps.toLowerCase(),
//                 spoonacularScore,
//                 healthScore,
//                 diets: diets
//             });
//             diets?.map(async dieta => await receta.setDiets(dieta));
//             return res.json('¡RECETA CREADA CON ÉXITO!')
//         }
//         console.log('NO ENTRÉ A NINGÚN IF POST/RECIPES LINEA 99')
//         return res.status(404).send('El nombre debe ser String.')
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = router;