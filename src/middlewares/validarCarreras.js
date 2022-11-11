const {check}  = require ('express-validator');

const validarCarreras  = async (req, res, next) => {
check('nombre').not().isEmpty().toString(),
check('descripcion').not().isEmpty().toString(),
check('anio').not().isEmpty().toString().isDate(),
check('materias').not().isEmpty().isArray()
next();
} 
    
module.exports = validarCarreras;