const {check}  = require ('express-validator');
const {validarErrores} = require ('./validarErrores')

const validarUsuario  = [
check('nombre').not().isEmpty().isString(),
check('apellido').not().isEmpty().isString(),
check('dni').not().isEmpty().isNumeric().isLength({ min: 5 }),
check('telefono').not().isEmpty().isNumeric(),
check('birthdate').not().isEmpty().isDate(),
check('perfiles').not().isEmpty().isArray(),
validarErrores
]

module.exports = validarUsuario;