const {check}  = require ('express-validator');

const validarCarreras  = async (req, res, next) => {
check('nombre').not().isEmpty().toString(),
check('descripcion').not().isEmpty().toString(),
check('profesores').not().isEmpty().toString()
check('notas').not().isEmpty().toString()
next();
} 
    
module.exports = validarCarreras;