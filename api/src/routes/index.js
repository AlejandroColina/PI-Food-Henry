const express = require('express');
const { Router } = require('express');
const { Dieta, Receta } = require('../db');
const router = Router();
router.use(express.json());
const fs = require('fs');
const { json } = require('body-parser');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

/*
[ ] GET /recipes?name="...":
Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
Si no existe ninguna receta mostrar un mensaje adecuado
-------------------------------------------------------------------------------------------------------
[ ] GET /recipes/:idReceta
Obtener el detalle de una receta en particular
Debe traer solo los datos pedidos en la ruta de detalle de receta
Incluir los tipos de dieta asociados
-------------------------------------------------------------------------------------------------------
[ ] GET /types:
[ ] POST /recipe:
*/
router.get('/recipes', async(req, res, next) => {
    try {
        const { name } = req.query;
        let recetas = await Receta.findAll({
            where: { nombre: name }
        });
        console.log(recetas)
        if (recetas.length) {
            return res.status(200).json(recetas);
        } else {
            return res.status(404).send('No existe alguna coincidencia con las recetas.');
        }
    } catch (error) {
        next(error)
    }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;