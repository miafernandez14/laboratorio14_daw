//Rutas producto
const express = require('express');
const router = express.Router();
const prestamoController = require('../Controller/PrestamoController');
const verifyToken = require('../Config/verifyToken');

//api/prestamo
router.post('/',prestamoController.crearPrestamo);
router.get('/',prestamoController.obtenerPrestamos);
router.put('/:id', prestamoController.devolverPrestamo);
router.delete('/:id', prestamoController.eliminarPrestamoHecho);

module.exports = router;