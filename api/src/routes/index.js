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
            return res.json('OK')
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

        id = id.toUpperCase();

        if (/[PI]\w+/.test(id)) {
            const dateDB = await Receta.findByPk(id);
            let dietas = await Dieta.findAll({
                include: [{
                    model: Receta,
                    where: { idReceta: id }
                }]
            });
            dietas = dietas?.map(e => e.title);
            return (dateDB == null
                ? res.status(404).send('No existe el producto en la BD.')
                : res.json({ dateDB, dietas }));
        }

        if (!isNaN(Number(id))) {
            const searchApi = await findByAPI(id);
            return (typeof searchApi !== 'undefined' || searchApi.length !== 0
                ? res.json(searchApi)
                : res.status(404).send('Not found.'))
        }

        return res.status(400).send('TypeError in Id');

    } catch (error) {
        next(error);
    }
});

module.exports = router;