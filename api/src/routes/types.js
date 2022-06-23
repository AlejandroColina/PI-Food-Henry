const express = require('express');
const { Router } = require('express');
const router = Router();
const { Diet } = require('../db');
const cors = require('cors');
router.use(cors());
router.use(express.json());


router.get('/', async (req, res, next) => {
    try {
        let listadoDietas = await Diet.findAll();
        if (!listadoDietas.length) return res.status(404).send({ msg: 'Sin dietas en la base de datos' });
        return res.json(listadoDietas);
    } catch (error) {
        next(error);
    }
});

module.exports = router;