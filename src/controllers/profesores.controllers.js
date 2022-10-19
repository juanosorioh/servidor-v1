const Alumno = require("../models/Personas");
const Anuncio = require("../models/Anuncios");
const Materias = require("../models/Materias");
const ctrlProfesor = {};

//mostrar los alumnos
ctrlProfesor.mostrarAlumnos = async (req, res) => {
  const alumnos = await Alumno.find({ activo: true });
  res.json({ alumnos });
  return alumnos;
};

//!mostrar Anuncios
ctrlProfesor.mostrarAnuncios = async (req, res) => {
  const anuncios = await Anuncio.find();
  res.json({ anuncios });
  return anuncios;
};

//!crear Anuncios
ctrlProfesor.crearAnuncios = async (req, res) => {
  const {
    autor,
    fecha,
    anuncio,
    materias,
    comentarios: [{}],
  } = req.body;
  const newAnuncio = new Anuncio({
    autor,
    fecha,
    anuncio,
    materias,
    comentarios: [{}],
  });
  await newAnuncio.save();
  res.json({ msg: "anuncio creado", newAnuncio });
  return newAnuncio;
};

//!borrar Anuncios
ctrlProfesor.borrarAnuncios = async (req, res) => {
  const { id } = req.params;
  try {
    await Anuncio.findByIdAndDelete(id);
    res.json({ msg: "anuncio eliminado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

//!Crear Comentarios
ctrlProfesor.CrearComentarios = async (req, res) => {
  const {
    comentarios: [autorComent, comentario, fechaComent],
  } = req.body;
  const newComent = {
    comentarios: [autorComent, comentario, fechaComent],
  };
  try {
    await Anuncio.comentarios.push(newComent);
    res.json({ msg: "comentario agregado correctamente", newComent });
    return newComent;
  } catch (error) {
    console.log(error);
  }
};

//!borrar Comentarios
ctrlProfesor.borrarComentarios = async (req, res) => {
  const { id } = req.params;
  try {
    await Anuncio.comentarios.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};

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
