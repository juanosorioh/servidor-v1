const {check}  = require ('express-validator');
const {validarErrores} = require ('./validarErrores')

const validarMaterias  = [
check('nombre').not().isEmpty().isString(),
check('descripcion').not().isEmpty().isString(),
check('profesores').not().isEmpty().isArray(),
check('notas').not().isEmpty().isString(),
validarErrores
] 
    
module.exports = validarMaterias;