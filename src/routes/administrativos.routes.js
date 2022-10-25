const { Router } = require("express");
const router = Router();
const validarJWT = require('../middlewares/validarJWT')

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
  agregarUsuario,
  agregarMateria,
  agregarCarrera,
  modificarUsuario,
  borrarUsuario,
  agregarComentario,
  borrarComentario,
  agregarAnuncio,
  borrarAnuncio,
  borrarCarrera,
  borrarMateria,
  mostrarDatosLogueado
  //mostrarComentarios
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
router.post("/agregarUsuario", agregarUsuario);
router.post("/agregarMateria", agregarMateria);
router.post("/agregarCarrera", agregarCarrera);
router.put("/modificarUsuario/:id", modificarUsuario);
router.put("/borrarUsuario/:id", borrarUsuario);
router.post("/agregarComentario/:id", agregarComentario);
router.put("/borrarComentario/:id", borrarComentario);
router.post("/agregarAnuncio", agregarAnuncio);
router.put("/borrarAnuncio/:id", borrarAnuncio);
router.put("/borrarCarrera/:id", borrarCarrera);
router.put("/borrarMateria/:id", borrarMateria);
router.get("/mostrarDatosLogueado", validarJWT, mostrarDatosLogueado)
//router.get("/mostrarComentarios", mostrarComentarios);

module.exports = router;
