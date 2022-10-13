const { Router } = require("express");
const router = Router();

const {
  mostrarAlumnos,
  mostrarMaterias,
  mostrarNotas,
  agregarComentarios,
} = require("../controllers/userControllers");

router.get("/mostrarAlumnos", mostrarAlumnos);
router.get("/mostrarMaterias", mostrarMaterias);
router.get("/mostrarNotas", mostrarNotas);
router.post("/addComents", agregarComentarios);
//router.put('/edit', modificarUsuario);
//router.put('/delete', borrarUsuario);

/* router.post('/',(req, res)=>{
    res.end("hello world")
 });
 router.put('/',(req, res)=>{
    res.end("hello world")
 });
 router.delete('/',(req, res)=>{
    res.end("hello world")
 }); */

module.exports = router;
