const Persona = require("../models/Personas");
const Materia = require("../models/Materias");
const Anuncio = require("../models/Anuncios")
const ctrlAlumno = {};

//!mostrar materias
ctrlAlumno.mostrarMaterias = async (req, res) => {
  try {
    const materia = await Materia.find({activo:true});
    return res.json({ materia });
  } catch (error) {
    console.log(error);
    return res.json({msg:"error"});
  }
  
};

//!mostrar notas
ctrlAlumno.mostrarNotas = async (req, res) => {
  
};

//!mostrar anuncios
ctrlAlumno.mostrarAnuncios = async (req, res) => {
  try {
    const anuncios = await Anuncio.find({activo:true});
  res.json({ anuncios });
  return anuncios;
  } catch (error) {
    res.json({msg:"error"});
    console.log(error);
  }
};

//!agregar comentarios
ctrlAlumno.agregarComentarios = async (req, res) => {
  const {id} = req.params;
  const {comentarios} = req.body;
  try {
    const nComentario = await Anuncio.findOneAndUpdate({id},{
      $push:{
        comentarios
      }
    },
    {new : true});
    return res.json({nComentario});
  } catch (error) {
    
  }
}

module.exports = ctrlAlumno;