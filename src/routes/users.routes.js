 const { Router } = require('express');
 const router = Router();
 
 const {agregarUsuario, modificarUsuario, borrarUsuario, mostrarUsuariosTotales} = require('../controllers/userControllers')


 router.get('/activos', mostrarUsuariosActivos);
 router.get('/', mostrarUsuariosTotales);
 router.post('/add', agregarUsuario);
 router.put('/edit', modificarUsuario);
 router.put('/delete', borrarUsuario);

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