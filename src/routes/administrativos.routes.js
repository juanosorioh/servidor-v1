const { Router } = require('express');
const router = Router();

const {borrarPersonas} = require('../controllers/administrativos.controllers')

router.get('/mostrarAlumnosActivos',mostrarAlumnosActivos);
router.get('/mostrarAlumnosTotales',mostrarAlumnosTotales);
router.get('/mostrarProfesoresActivos',mostrarProfesoresActivos);
router.get('/mostrarProfesoresTotales',mostrarProfesoresTotales);
router.get('/mostrarAdministrativosActivos',mostrarAdministrativosActivos);
router.get('/mostrarAdministrativosTotales',mostrarAdministrativosTotales);
router.post('/agregarAlumnos',agregarAlumnos);
router.post('/agregarProfesores',agregarProfesores);
router.post('/agregaradministrativos',agregaradministrativos);
router.put('/modificarAlumnos',modificarAlumnos);
router.put('/modificarProfesores',modificarProfesores);
router.put('/modificaradministrativos',modificaradministrativos);
router.put('/borrarAlumnos',borrarAlumnos);
router.put('/borrarProfesores',borrarProfesores);
router.put('/borraradministrativos',borraradministrativos);
router.post('/agregarComentarios',agregarComentarios);
router.put('/modificarComentarios',modificarComentarios);
router.put('/borrarComentarios',agregarComentarios);
router.get('/verAnuncios',verAnuncios);
router.post('/agregarAnuncios',agregarAnuncios);
router.put('/modificarAnuncios',modificarAnuncios);
router.put('/borrarAnuncios',agregarAnuncios);

//module.exports = router;