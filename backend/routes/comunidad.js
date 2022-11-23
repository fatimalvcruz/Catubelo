//Rutas para comunidad de gatos
const express = require ('express');
const router = express.Router();
const comununidadController = require('../controllers/comunidadController');

//api/comunidades

router.post('/', comununidadController.crearComunidad);
router.get('/', comununidadController.obtenerComunidades)
 
module.exports = router;