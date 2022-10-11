const Alumnos = require("../models/Personas");
const ctrlProfesor = {};

//mostrar los alumnos activos
ctrlProfesor.mostrarActivos = async (req, res) =>{
    const alumnos = await Alumnos.find({activo:true});
    res.json({alumnos});
    return alumnos;
}

//mostrar alumnos totales, tanto activos como dados de baja
ctrlProfesor.mostrarTodos = async (req, res) => {
    const alumnos = await Alumnos.find();
    res.json({alumnos});
    return alumnos;

//!agregar notas
ctrlProfesor.agregarNotas = async (req, res) => {
    
}

//!agregar anuncios

//!agregar comentarios
}

module.exports = ctrlProfesor;