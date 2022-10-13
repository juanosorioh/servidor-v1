const { Router } = require("express");
const router = Router();

const {
  mostrarAlumnos,
  mostrarAnuncios,
  crearAnuncios,
  modificarAnuncios,
  borrarAnuncios,
  CrearComentarios,
  borrarComentarios,
  modificarComentarios,
  modificarNotas
} = require("../controllers/profesores.controllers");

router.get("/mostrarAlumnos", mostrarAlumnos);
router.get("/mostrarAnuncios", mostrarAnuncios);
router.post("/crearAnuncios", crearAnuncios);
router.put("/modificarAnuncios", modificarAnuncios);
router.put("borrarAnuncios", borrarAnuncios);
router.post("/CrearComentarios", CrearComentarios);
router.put("/modificarComentarios", modificarComentarios);
router.put("/borrarComentarios", borrarComentarios);
router.put("/modificarNotas", modificarNotas);


module.exports = router;
