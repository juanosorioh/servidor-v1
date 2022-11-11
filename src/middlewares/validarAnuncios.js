const {check}  = require ('express-validator');

const validarAnuncios  = async (req, res, next) => {
    check('autor').not().isEmpty().toString(),
    check('fecha').not().isEmpty().toString().isDate(),
    check('anuncio').not().isEmpty().toString(),
    check('materias').not().isEmpty().isArray(),
    check('comentarios').not().isEmpty().isArray()
next();
} 
    
module.exports = validarAnuncios;