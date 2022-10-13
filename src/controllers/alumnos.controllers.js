const Alumno = require("../models/Personas");
const Materia = require("../models/Materias");
const Anuncio = require("../models/Anuncios")
const ctrlAlumno = {};

//agregar un usuario //!controlador funcionando pero solo a modo de prueba ya que debe ir en los controladores de administrativos

/* ctrlUser.agregarUsuario = async (req, res) => {

//todo: desestructuramos los datos

  const { 
    email, 
    password, 
    nombre, 
    apellido, 
    birthdate, 
    dni, 
    telefono, 
    perfiles:[
      {
        rol: [
        {
            alumno,
            profesor,
            administrativo
          },
        ],
        datosAlumnos: [
          {
            carrera,
            titulo
          },
        ],
        datos: [{ datos }],
      },
    ]
  } = req.body;
  
  //todo: creamos un nuevo usuario
  
  const user = new User({
    email, 
    password, 
    nombre, 
    apellido, 
    birthdate, 
    dni, 
    telefono, 
    perfiles:[
      {
        rol: [
        {
            alumno,
            profesor,
            administrativo
          },
        ],
        datosAlumnos: [
          {
            carrera,
            titulo
          },
        ],
        datos: [{ datos }],
      },
    ]
  });
  await user.save();
  res.json({msg:"usuario agregado correctamente", user });
  return user;
}; */

//!mostrar alumnos
ctrlAlumno.mostrarAlumnos = async (req, res) => {
  try {
    const alumno = await Alumno.find({activo:true});
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
    const nota = await notas.find()
    res.json({nota})
    return nota;  
  } catch (error) {
    console.log(error)
  }
  
};

//!agregar comentarios
ctrlAlumno.agregarComentarios = async (req, res) => {
  const {fecha, autor, comentario} = req.body;
  const {...resto} = req.body;
  const newComment = new Anuncio(
  )
  await comment.save();
  console.log(coment);
  return comment;
}

module.exports = ctrlAlumno;