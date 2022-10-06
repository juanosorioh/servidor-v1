 const { Router } = require('express');
 const router = Router();
 
 const {agregarUsuario, modificarUsuario, borrarUsuario, mostrarUsuariosTotales} = require('../controllers/userControllers')


 router.get('/', mostrarUsuariosActivos);
 router.get('/', mostrarUsuariosTotales);
 router.post('/', agregarUsuario);
 router.put('/', modificarUsuario);
 router.put('/', borrarUsuario);

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