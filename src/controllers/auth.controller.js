const Persona = require('../models/Personas');
const generarJWT = require('../helpers/generarjwt');

const { validarPassword } = require('./../helpers/password');

const authController = {}

authController.postLoginUser = async (req, res) => {
    const { email, password } = req.body;

    const persona = await Persona.findOne({ email });

    if (!persona) {
        return res.status(400).json({
            message: 'Error: El usuario no existe.'
        });
    }

    const passwordEncriptada = persona.password;
    const validarContra = await validarPassword(password, passwordEncriptada);

    if (!validarContra) {
        return res.status(400).json({
            message: 'Error: La contraseña no es válida.'
        });
    }
    
    const payload = {id: persona._id};
    const token = await generarJWT(payload)
    
    return res.json({ token });
}

module.exports = authController