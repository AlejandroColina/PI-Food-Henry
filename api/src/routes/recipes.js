const express = require('express');
const { Router } = require('express');
const router = Router();
const { Diet, Recipe } = require('../db');
const { findByAPI, dataApi } = require('../axios');
const { rezetas } = require('../axios/rezetas');
router.use(express.json());

router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query;

        let api = await dataApi();

        let BD = await Recipe.findAll({
            include: [{
                model: Diet,
                attributes: ['title'],
                through: {
                    attributes: []
                }
            }]
        });

        let recetasBD = BD.map((e) => {
            return {
                id: e.id,
                title: e.title,
                image: e.image,
                summary: e.summary,
                spoonacularScore: e.spoonacularScore,
                healthScore: e.healthScore,
                steps: e.steps,
                diets: e.Diets?.map(e => e.title)
            }
        })

        if (recetasBD.length == 0 && api === undefined
            || recetasBD.length == 0 && api?.length == 0) return res.status(404).send('not data');
        api.length ? recetasBD.push(api) : recetasBD;


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

router.get('/:id', async (req, res, next) => {
    try {
        let { id } = req.params;

        id = id.toUpperCase().trim();

        if (/[P][I]$/.test(id)) {
            let dateDB = await Recipe.findByPk(id);
            let join = await Diet.findAll({
                include: [{
                    model: Recipe,
                    where: { id: id }
                }]
            });
            join = join?.map(e => e.title);

            let toResponse = {
                id: dateDB.id,
                title: dateDB.title,
                image: dateDB.image,
                summary: dateDB.summary,
                spoonacularScore: dateDB.spoonacularScore,
                healthScore: dateDB.healthScore,
                steps: dateDB.steps,
                diets: join
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
        next(error);
    }
});

module.exports = router;
