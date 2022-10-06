 const { Router } = require('express');
 const router = Router();
 
 const {agregarUsuario, mostrarUsuarios} = require('../controllers/userControllers')
 router.get('/', mostrarUsuarios);
 router.post('/', agregarUsuario);
 router.post('/', );
 router.post('/', );

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