const { Router } = require("express");
const router = Router();

const {
  mostrarAlumnosActivos,
  mostrarAlumnosTotales,
  mostrarProfesoresActivos,
  mostrarProfesoresTotales,
  mostrarAdministrativosActivos,
  mostrarAdministrativosTotales,
  mostrarMaterias,
  mostrarCarreras,
  mostrarAnuncios,
  agregarAlumnos,
  agregarProfesores,
  agregaradministrativos,
  agregarMaterias,
  agregarCarreras,
  modificarAlumnos,
  modificarProfesores,
  modificaradministrativos,
  borrarAlumnos,
  borrarProfesores,
  borraradministrativos,
  agregarComentarios,
  borrarComentarios,
  verAnuncios,
  agregarAnuncios,
  borrarAnuncios,
} = require("../controllers/administrativos.controllers");

router.get("/mostrarAlumnosActivos", mostrarAlumnosActivos);
router.get("/mostrarAlumnosTotales", mostrarAlumnosTotales);
router.get("/mostrarProfesoresActivos", mostrarProfesoresActivos);
router.get("/mostrarProfesoresTotales", mostrarProfesoresTotales);
router.get("/mostrarAdministrativosActivos", mostrarAdministrativosActivos);
router.get("/mostrarAdministrativosTotales", mostrarAdministrativosTotales);
router.get("/mostrarMaterias", mostrarMaterias);
router.get("/mostrarCarreras", mostrarCarreras);
router.get("/mostrarAnuncios", mostrarAnuncios);
router.post("/agregarAlumnos", agregarAlumnos);
router.post("/agregarProfesores", agregarProfesores);
router.post("/agregarMaterias", agregarMaterias);
router.post("/agregarCarreras", agregarCarreras);
router.post("/agregaradministrativos", agregaradministrativos);
router.put("/modificarAlumnos", modificarAlumnos);
router.put("/modificarProfesores", modificarProfesores);
router.put("/modificaradministrativos", modificaradministrativos);
router.put("/borrarAlumnos", borrarAlumnos);
router.put("/borrarProfesores", borrarProfesores);
router.put("/borraradministrativos", borraradministrativos);
router.post("/agregarComentarios", agregarComentarios);
router.put("/borrarComentarios", borrarComentarios);
router.get("/verAnuncios", verAnuncios);
router.post("/agregarAnuncios", agregarAnuncios);
router.put("/borrarAnuncios", borrarAnuncios);

module.exports = router;
