const Persona = require("../models/Personas");
const Anuncio = require("../models/Anuncios");
const Materias = require("../models/Materias");
const ctrlProfesor = {};

//mostrar los alumnos
ctrlProfesor.mostrarAlumnos = async (req, res) => {
  const alumnos = await Persona.find({
    perfiles: { $elemMatch: { rol: "alumno" } },
    activo: true,
  });
  res.json({ alumnos });
  return alumnos;
};

//!mostrar Anuncios
ctrlProfesor.mostrarAnuncios = async (req, res) => {
  try {
    const anuncios = await Anuncio.find({activo:true});
  res.json({ anuncios });
  return anuncios;
  } catch (error) {
    res.json({msg:"error"});
    console.log(error);
  }
};

//!crear Anuncios
ctrlProfesor.crearAnuncios = async (req, res) => {
  const datos = req.body;
  const newAnuncio = new Anuncio({
    autor: datos.autor,
    fecha: datos.fecha,
    anuncio: datos.anuncio,
    materias: datos.materias,
    comentarios: datos.comentarios
  });
  try {
    await newAnuncio.save();
  res.json({ msg: "anuncio creado", newAnuncio });
  return newAnuncio;
  } catch (error) {
    res.json({msg:"error"});
    console.log(error);
  }
};

//!borrar Anuncios
ctrlProfesor.borrarAnuncios = async (req, res) => {
  const { id } = req.params;
  const actualizacion = req.body;
  try {
    const anuncioBorrado = await Anuncio.findByIdAndUpdate(
      id, {
        activo: actualizacion.activo
      },
      {new : true}
    );
    res.json({msg:"anucio eliminado correctamente", anuncioBorrado});
    return anuncioBorrado;
  } catch (error) {
    res.json({msg:"ocurrio un error",error});
    console.log(error);
  }
};

//!Crear Comentarios
ctrlProfesor.CrearComentarios = async (req, res) => {};

//!borrar Comentarios
ctrlProfesor.borrarComentarios = async (req, res) => {}

//!modificar Notas
ctrlProfesor.modificarNotas = async (req, res) => {
  const { id } = req.params;
  const { alumno, ...notas } = req.body;
  try {
    const materias = await Materias.findById(id);
    const nota = materias.notas.find((nota) => nota.alumno === alumno);
    const indiceNota = materias.notas.findIndex(
      (nota) => nota.alumno === alumno
    );
    const listaNotas = [...materias.notas];

    listaNotas[indiceNota] = { alumno, ...notas };
    const materiaEditada = await Materias.findByIdAndUpdate(
      id,
      { notas: listaNotas },
      { new: true }
    );

    res.json({ msg: "nota editada correctamente", materia: materiaEditada });
  } catch (error) {
    console.log(error);
    res.json({ msg: "ocurrio un error" });
  }
};
module.exports = ctrlProfesor;
