//Rutas para comunidad de gatos
const express = require ('express');
const router = express.Router();
const comununidadController = require('../controllers/comunidadController');

//api/comunidades

router.post('/', comununidadController.crearComunidad);
router.get('/', comununidadController.obtenerComunidades);
router.put('/:id', comununidadController.actualizarComunidades);
router.put('/:id', comununidadController.actualizarComunidades);
router.get('/:id', comununidadController.obtenerComunidad);
router.delete('/:id', comununidadController.eliminarComunidad);
 
module.exports = router;