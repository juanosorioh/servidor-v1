const Persona = require("../models/Personas");
const Materia = require("../models/Materias");
const Anuncio = require("../models/Anuncios");
const Carrera = require("../models/Carreras");
const ctrlAdministrativos = {};

ctrlAdministrativos.mostrarAlumnosActivos = async (req, res) => {
  try {
    const alumnos = await Persona.find({
      perfiles: { $elemMatch: { rol: "alumno" } },
      activo: true,
    });
    res.json({ alumnos });
    return alumnos;
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

ctrlAdministrativos.mostrarAlumnosTotales = async (req, res) => {
  try {
    const alumnos = await Persona.find({
      perfiles: { $elemMatch: { rol: "alumno" } },
    });
    res.json({ alumnos });
    return alumnos;
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

ctrlAdministrativos.mostrarProfesoresActivos = async (req, res) => {
  try {
    const profesores = await Persona.find({
      perfiles: { $elemMatch: { rol: "profesor" } },
      activo: true,
    });
    res.json({ profesores });
    return profesores;
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

ctrlAdministrativos.mostrarProfesoresTotales = async (req, res) => {
  try {
    const profesores = await Persona.find({
      perfiles: { $elemMatch: { rol: "profesor" } },
    });
    res.json({ profesores });
    return profesores;
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

ctrlAdministrativos.mostrarAdministrativosActivos = async (req, res) => {
  try {
    const administrativos = await Persona.find({
      perfiles: { $elemMatch: { rol: "administrativo" } },
      activo: true,
    });
    res.json({ administrativos });
    return administrativos;
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

ctrlAdministrativos.mostrarAdministrativosTotales = async (req, res) => {
  try {
    const administrativos = await Persona.find({
      perfiles: { $elemMatch: { rol: "administrativo" } },
    });
    res.json({ administrativos });
    return administrativos;
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

ctrlAdministrativos.mostrarMaterias = async (req, res) => {
  try {
    const materias = await Materia.find({ activo: true });
    res.json({ materias });
    return materias;
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
ctrlAdministrativos.mostrarCarreras = async (req, res) => {
  try {
    const carreras = await Carrera.find({ activo: true });
    res.json({ carreras });
    return carreras;
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
ctrlAdministrativos.mostrarAnuncios = async (req, res) => {
  try {
    const anuncios = await Anuncio.find({ activo: true });
    res.json({ anuncios });
    return anuncios;
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

ctrlAdministrativos.agregarCarrera = async (req, res) => {
  const carrera = req.body;
  const newCarrera = new Carrera({
    nombre: carrera.nombre,
    descripcion: carrera.descripcion,
    anio: carrera.anio,
    materias: carrera.materias,
  });
  try {
    await newCarrera.save();
    res.json({ msg: "carrera agregada correctamente" }, newCarrera);
    return newCarrera;
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

ctrlAdministrativos.agregarMateria = async (req, res) => {
  const materia = req.body;
  const newMateria = new Materia({
    nombre: materia.nombre,
    descripcion: materia.descripcion,
    profesores: materia.profesores,
    notas: materia.notas,
    asistencia: materia.asistencia,
    clasesDictadas: materia.clasesDictadas,
  });
  try {
    await newMateria.save();
  res.json({ msg: "materia agregada correctamente", newMateria });
  return newMateria;
  } catch (error) {
    console.log(error);
    res.json(error)
  }
};

ctrlAdministrativos.agregarUsuario = async (req, res) => {
  const alumno = req.body;
  const nAlumno = new Persona({
    nombre: alumno.nombre,
    apellido: alumno.apellido,
    email: alumno.email,
    password: alumno.password,
    birthdate: alumno.birthdate,
    dni: alumno.dni,
    telefono: alumno.telefono,
    perfiles: alumno.perfiles,
  });
 try {
  await nAlumno.save();
  res.json({ msg: "usuario agregado correctamente", nAlumno });
  return nAlumno;
 } catch (error) {
  console.log(error);
  res.json(error);
 }
};
//todo----------------------------------------------------------

ctrlAdministrativos.modificarUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = req.body;
  try {
    const usuarioModif = await Persona.findByIdAndUpdate(
      id, {
        nombre: usuario.nombre,
    apellido: usuario.apellido,
    email: usuario.email,
    password: usuario.password,
    birthdate: usuario.birthdate,
    dni: usuario.dni,
    telefono: usuario.telefono,
    perfiles: usuario.perfiles,
      },
      {new : true}
    );
    res.json({msg:"usuario modificado", usuarioModif});
    return usuarioModif;
  } catch (error) {
    console.log(error);
    res.json({ msg: "ocurrio un error" });
  }
};

//todo----------------------------------------------------------

ctrlAdministrativos.borrarUsuario = async (req, res) => {};

//! en proceso
ctrlAdministrativos.agregarComentario = async (req, res) => {
  const {comentarios, ...restoAnuncio} = req.body;
  const { id } = req.params;
};

ctrlAdministrativos.borrarComentario = async (req, res) => {};

ctrlAdministrativos.agregarAnuncio = async (req, res) => {
  const anuncio = req.body;
  const nAnuncio = new Anuncio({
    autor: anuncio.autor,
  fecha: anuncio.fecha,
  materias: anuncio.materias,
  comentarios: anuncio.comentarios
  });
  try {
    await nAnuncio.save();
    res.json({msg:"anuncio agregado correctamente",nAnuncio});
    return nAnuncio;
  } catch (error) {
    console.log(error);
    res.json(error);
  }

};

ctrlAdministrativos.borrarAnuncio = async (req, res) => {};

module.exports = ctrlAdministrativos;
