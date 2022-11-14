const {check}  = require ('express-validator');
const {validarErrores} = require ('./validarErrores.js');

const validarAnuncios  = [
    check('autor').not().isEmpty().isString(),
    check('fecha').not().isEmpty().isString().isDate(),
    check('anuncio').not().isEmpty().isString(),
    check('materias').not().isEmpty().isArray(),
    check('comentarios').not().isEmpty().isArray(),
    validarErrores
]
    
module.exports = validarAnuncios;