const express = require('express');
const { Router } = require('express');
const { Diet, Recipe } = require('../db');
const router = Router();
const cors = require('cors');
router.use(cors());
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

        let { title, summary, spoonacularScore, healthScore, steps, diets, image } = req.body;

        if (!title || !summary || !diets) return res.status(404).send('Faltan datos mínimos para la creación de la receta.');
        if (typeof spoonacularScore != 'number' || typeof healthScore != 'number') return res.status(404).send('Puntuación y nivelSaludable deben ser números.');
        if (typeof title == 'string') {
            let receta = await Recipe.create({
                id: `${id()}PI`,
                title: title.toLowerCase(),
                image,
                summary: summary.toLowerCase(),
                steps: steps.toLowerCase(),
                spoonacularScore,
                healthScore,
                diets: diets
            });
            diets?.map(async dieta => await receta.setDiets(dieta));
            return res.json('¡RECETA CREADA CON ÉXITO!')
        }
        return res.status(404).send('El nombre debe ser String.')
    } catch (error) {
        next(error);
    }
});

module.exports = router;