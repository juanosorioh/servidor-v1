const {check}  = require ('express-validator');

const validarMaterias  = async (req, res, next) => {
check('nombre').not().isEmpty().toString(),
check('descripcion').not().isEmpty().toString(),
check('profesores').not().isEmpty().isArray()
check('notas').not().isEmpty().toString()
next();
} 
    
module.exports = validarMaterias;