const Persona = require("../models/Personas");
const Materia = require("../models/Materias");
const Anuncio = require("../models/Anuncios")
const ctrlAlumno = {};

//!mostrar materias
ctrlAlumno.mostrarMaterias = async (req, res) => {
  try {
    const materia = await Materia.find({activo:true});
    res.json({ materia });
    return materia;  
  } catch (error) {
    res.json({msg:"error"})
    console.log(error)
  }
  
};

//!mostrar notas
ctrlAlumno.mostrarNotas = async (req, res) => {};

//!mostrar anuncios
ctrlAlumno.mostrarAnuncios = async (req, res) => {};

//!agregar comentarios
ctrlAlumno.agregarComentarios = async (req, res) => {}

module.exports = ctrlAlumno;