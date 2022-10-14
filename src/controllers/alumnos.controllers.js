const Alumno = require("../models/Personas");
const Materia = require("../models/Materias");
const Anuncio = require("../models/Anuncios")
const ctrlAlumno = {};

//!mostrar alumnos
ctrlAlumno.mostrarAlumnos = async (req, res) => {
  try {
    const alumno = await Alumno.find({activo:true, tipo:"alumno"});
    res.json({ alumno });
    return alumno;
  } catch (error) {
    console.log(error)
  }
  
};

//!mostrar materias
ctrlAlumno.mostrarMaterias = async (req, res) => {
  try {
    const materia = await Materia.find({activo:true});
    res.json({ materia });
    return materia;  
  } catch (error) {
    console.log(error)
  }
  
};

//!mostrar notas
ctrlAlumno.mostrarNotas = async (req, res) => {
  try {
    const nota = await Materia.find({notas:[]})
    res.json({nota})
    return nota;  
  } catch (error) {
    console.log(error)
  }
  
};

//!agregar comentarios
ctrlAlumno.agregarComentarios = async (req, res) => {
  try {
    const { 
     comentarios:[
        {autorComent,
        comentario,
        fechaComent}
      ] } = req.body;

  const newComment = 
      {autorComent,
      comentario,
      fechaComent}
  await comentarios.push(newComment);
  console.log({msg:"comentario agregado correctamente",newComment});
  return newComment;
  } catch (error) {
    console.log("falló",error)
  }
}

module.exports = ctrlAlumno;