const Alumno = require("../models/Personas");
const Anuncio = require("../models/Anuncios")
const ctrlProfesor = {};

//mostrar los alumnos
ctrlProfesor.mostrarAlumnos = async (req, res) =>{
    const alumnos = await Alumno.find({activo:true});
    res.json({alumnos});
    return alumnos;
}


//!mostrar Anuncios
ctrlProfesor.mostrarAnuncios = async (req, res) => {
        const anuncios = await Anuncio.find();
        res.json({anuncios});
        return anuncios;
}

//!crear Anuncios
ctrlProfesor.crearAnuncios = async (req, res) => {
        const {
        autor,
        fecha,
        anuncio,
        materias,
        comentarios:[{}]
    } = req.body;
        const newAnuncio = new Anuncio({
            autor,
            fecha,
            anuncio,
            materias,
            comentarios:[{}]
        });
        await newAnuncio.save();
        res.json({msg:"anuncio creado",newAnuncio});
        return newAnuncio;
        
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