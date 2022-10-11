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
}

//!agregar notas
ctrlProfesor.agregarNota = async (req, res) => {
        
}

//!agregar anuncios
ctrlProfesor.agregarAnuncio = async (req, res) => {
        
}

//!agregar comentarios
ctrlProfesor.agregarComentario = async (req, res) => {
        
}

module.exports = ctrlProfesor;