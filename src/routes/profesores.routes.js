const { Router } = require("express");
const router = Router();

const {
  mostrarAlumnos,
  mostrarAnuncios,
  crearAnuncios,
  //modificarAnuncios,
  borrarAnuncios,
  CrearComentarios,
  borrarComentarios,
  modificarNotas
} = require("../controllers/profesores.controllers");

router.get("/mostrarAlumnos", mostrarAlumnos);
router.get("/mostrarAnuncios", mostrarAnuncios);
router.post("/crearAnuncios", crearAnuncios);
//router.put("/modificarAnuncios", modificarAnuncios);
router.put("borrarAnuncios", borrarAnuncios);
router.post("/CrearComentarios", CrearComentarios);
router.put("/borrarComentarios", borrarComentarios);
router.put("/modificarNotas:id", modificarNotas);


module.exports = router;
