const {check}  = require ('express-validator');
const validarErrores = require ('./validarErrores')

const validarCarreras  =  [
    check('nombre').not().isEmpty().isString().withMessage("Error pa"),
    check('descripcion').not().isEmpty().isString(),
    check('anio').not().isEmpty().isDate(),
    check('materias').not().isEmpty().isArray() , 
    validarErrores
]
    
module.exports = validarCarreras;