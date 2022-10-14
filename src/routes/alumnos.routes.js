const { Router } = require("express");
const router = Router();

const {
  mostrarAlumnos,
  mostrarMaterias,
  mostrarNotas,
  agregarComentarios,
} = require("../controllers/alumnos.controllers");

router.get("/mostrarAlumnos", mostrarAlumnos);
router.get("/mostrarMaterias", mostrarMaterias);
router.get("/mostrarNotas", mostrarNotas);
router.post("/addComents", agregarComentarios);

module.exports = router;
