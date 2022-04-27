const express = require('express');
const { Router } = require('express');
const { Dieta, Receta } = require('../db');
const router = Router();
const { Op } = require('sequelize');
const { findByAPI, dataApi } = require('../axios');
router.use(express.json());

router.get('/recipes', async (req, res, next) => {
    try {
        const { name } = req.query;
        let recetas = await Receta.findAll({ include: [{ model: Dieta }] });
        let consultaDataApi = await dataApi();

        if (consultaDataApi == undefined && recetas.length == 0) return res.status(404).send('--->  NOT API, NOT BD  <---');

        if (name && recetas.length > 0) {
            recetas = await Receta.findAll({ where: { title: { [Op.substring]: name } }, include: [{ model: Dieta }] });
            consultaDataApi = consultaDataApi?.filter(e => e.title.includes(name));
            if (consultaDataApi.length) recetas.push(consultaDataApi);
            return recetas.length > 0 ? res.status(200).json(recetas) : res.status(400).send('Esta receta no existe en la BD.');
        } else if (consultaDataApi !== 'undefined') {
            if (consultaDataApi.length) recetas.push(consultaDataApi)
            return res.json(recetas);
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

        const { idReceta, title, summary, spoonacularScore, healthScore, steps, dietas } = req.body;

        if (!title || !summary || !dietas) return res.status(404).send('Faltan datos mínimos para la creación de la receta.');
        if (typeof spoonacularScore != 'number' || typeof healthScore != 'number') return res.status(404).send('Puntuación y nivelSaludable deben ser números.');
        if (typeof title == 'string') {
            let receta = await Receta.create({
                idReceta: idReceta.toUpperCase(),
                title : title.toLowerCase(),
                summary : summary.toLowerCase(),
                steps : steps.toLowerCase(),
                spoonacularScore,
                healthScore,
            });
            dietas?.map(async dieta => await receta.setDieta(dieta));
            return res.send('OK')
        }
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
// /-\w/g.test(id)