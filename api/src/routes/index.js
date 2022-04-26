const express = require('express');
const { Router } = require('express');
const { Dieta, Receta } = require('../db');
const router = Router();
const { findByAPI } = require('../axios');
router.use(express.json());

router.get('/recipes', async (req, res, next) => {
    try {
        const { name } = req.query;
        if (name) {
            let recetas = await Receta.findAll({ where: { nombre: name } });
            recetas.length ? res.json(recetas) : res.status(400).send('Esta receta no existe en la BD.');
        }
        let recetas = await Receta.findAll();
        return res.json(recetas);
    } catch (error) {
        next(error);
    }
});

router.get('/types', async (req, res, next) => {
    try {
        let listadoDietas = await Dieta.findAll();
        if (listadoDietas.length) return res.status(404).send({ msg: 'Sin dietas en la base de datos' });
        return res.json(listadoDietas);
    } catch (error) {
        next(error);
    }
});

router.post('/recipe', async (req, res, next) => {
    try {
        const { idReceta, nombre, resumenPlato, puntuacion, nivelSaludable, pasoApaso, dietas } = req.body;
        if (!nombre || !resumenPlato || !dietas) return res.status(404).send('Faltan datos mínimos para la creación de la receta.');
        if (typeof puntuacion != 'number' || typeof nivelSaludable != 'number') return res.status(404).send('Puntuación y nivelSaludable deben ser números.');
        if (typeof nombre == 'string') {
            let receta = await Receta.create({
                idReceta,
                nombre,
                resumenPlato,
                puntuacion,
                nivelSaludable,
                pasoApaso,
            });
            dietas.map(async dieta => await receta.setDieta(dieta));
            return res.send('OK')
        }
        return res.status(404).send('El nombre debe ser String.')
    } catch (error) {
        next(error);
    }
});

router.get('/recipes/:id', async (req, res, next) => {
    try {
        const { id } = req.params;

        if (/[PI]\w+/.test(id)) {
            const dateDB = await Receta.findByPk(id);
            let prueba = Dieta.findAll({
                include: [{
                    model: Receta
                }]
            });
            return dateDB == null ? res.status(404).send('No existe el producto en la BD.') : res.json({dateDB, prueba});
        }

        if (!isNaN(Number(id))) {
            const searchApi = await findByAPI(id)
            searchApi == undefined || searchApi.length
                ? res.json(searchApi)
                : res.status(404).send('Not found.')
        }

        return res.status(400).send('TypeError in Id');

    } catch (error) {
        next(error);
    }
});

module.exports = router;
// /-\w/g.test(id)