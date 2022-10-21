const { Router } = require("express");
const router = Router();

const {
  mostrarMaterias,
  mostrarNotas,
  agregarComentarios,
  mostrarAnuncios
} = require("../controllers/alumnos.controllers");


router.get("/mostrarMaterias", mostrarMaterias);
router.get("/mostrarAnuncios", mostrarAnuncios);
router.get("/mostrarNotas", mostrarNotas);
router.post("/agregarComentarios/:id", agregarComentarios);

module.exports = router;
