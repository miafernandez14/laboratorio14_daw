//Rutas producto
const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

//api/usuario
router.post('/signup', userController.crearUsuario);

router.post('/signin', userController.iniciarUsuario);

module.exports = router;