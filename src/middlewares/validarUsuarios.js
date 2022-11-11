const {check}  = require ('express-validator');

const validarUsuario  = async (req, res, next) => {
check('nombre').not().isEmpty().toString(),
check('apellido').not().isEmpty().toString(),
check('dni').not().isEmpty().isNumeric().isLength({ min: 5 }),
check('telefono').not().isEmpty().isNumeric(),
check('birthdate').not().isEmpty().isDate(),
check('perfiles').not().isEmpty().isArray(),
next();
}

module.exports = validarUsuario;