const { Router } = require('express');
const router = Router();

const {mostrarActivos, mostrarTodos} = require('../controllers/profesores.controllers')

router.get('all',mostrarTodos)
router.get('activos',mostrarActivos)
router.post('comment')
router.post('anuncio')
router.post('notas')
router.put('notas')
router.put('anuncio')

//module.exports = router;