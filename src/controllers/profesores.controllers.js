const Alumnos = require("../models/Personas");
const ctrlProfesor = {};

//mostrar los alumnos
ctrlProfesor.mostrarAlumnos = async (req, res) =>{
    const alumnos = await Alumnos.find({activo:true});
    res.json({alumnos});
    return alumnos;
}


//!mostrar Anuncios
ctrlProfesor.mostrarAnuncios = async (req, res) => {
        
}

//!crear Anuncios
ctrlProfesor.crearAnuncios = async (req, res) => {
        
}

//!modificar Anuncios
ctrlProfesor.modificarAnuncios = async (req, res) => {
        
}

//!borrar Anuncios
ctrlProfesor.borrarAnuncios = async (req, res) => {
        
}

//!Crear Comentarios
ctrlProfesor.CrearComentarios = async (req, res) => {
        
}

//!borrar Comentarios
ctrlProfesor.borrarComentarios = async (req, res) => {
        
}

//!modificar Comentarios
ctrlProfesor.modificarComentarios = async (req, res) => {
        
}

//!modificar Notas
ctrlProfesor.modificarNotas = async (req, res) => {
        
}

module.exports = ctrlProfesor;