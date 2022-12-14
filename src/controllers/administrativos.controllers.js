const Persona = require("../models/Personas");
const Materia = require("../models/Materias");
const Anuncio = require("../models/Anuncios");
const Carrera = require("../models/Carreras");
const {encriptarPassword} = require("../helpers/password")
const ctrlAdministrativos = {};

ctrlAdministrativos.mostrarUsuariosActivos = async (req, res) => {
  try {
    const usuarios = await Persona.find();
    return res.json({ usuarios});
  } catch (error) {
    res.json({msg:"fallo",error});
    console.log(error);
  }
};

ctrlAdministrativos.mostrarAlumnosActivos = async (req, res) => {
  try {
    const alumnos = await Persona.find({
      perfiles: { $elemMatch: { rol: "alumno" } },
      activo: true
    });
    return res.json({ alumnos});
  } catch (error) {
    res.json({msg:"fallo",error});
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
    const anuncios = await Anuncio.find({ activo: true }).populate("autor", ["nombre", "apellido"]);
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
  const passwordEncriptada = encriptarPassword(alumno.password);
  const nAlumno = new Persona({
    nombre: alumno.nombre,
    apellido: alumno.apellido,
    email: alumno.email,
    password: passwordEncriptada,
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


ctrlAdministrativos.borrarUsuario = async (req, res) => {
  const { id } = req.params;
  const actualizacion = req.body;
  try {
    const usuarioBorrado = await Persona.findByIdAndUpdate(
      id,
      {activo: actualizacion.activo},
      {new : true}
    );
    res.json({msg:"usuario borrado correctamente", usuarioBorrado});
    return usuarioBorrado;
  } catch (error) {
    res.json({msg:"error al borrar usuario",error});
    console.log(error);
  }
};

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

ctrlAdministrativos.borrarAnuncio = async (req, res) => {
  const { id } = req.params;
  const actualizacion = req.body;
  try {
    const anuncioBorrado = await Anuncio.findByIdAndUpdate(
      id, {
        activo: actualizacion.activo
      },
      {new : true}
    );
    res.json({msg:"anuncio eliminado correctamente", anuncioBorrado});
    return anuncioBorrado;
  } catch (error) {
    res.json({msg:"ocurrio un error",error});
    console.log(error);
  }

};

ctrlAdministrativos.borrarCarrera = async (req, res) => {
  const { id } = req.params;
  const actualizacion = req.body;
  try {
    const carreraBorrada = await Carrera.findByIdAndUpdate(
      id, {
        activo: actualizacion.activo
      },
      {new : true}
    );
    res.json({msg:"carrera eliminada correctamente", carreraBorrada});
    return carreraBorrada;
  } catch (error) {
    res.json({msg:"ocurrio un error",error});
    console.log(error);
  }
};

ctrlAdministrativos.borrarMateria = async (req, res) => {
  const { id } = req.params;
  const actualizacion = req.body;
  try {
    const materiaBorrada = await Materia.findByIdAndUpdate(
      id, {
        activo: actualizacion.activo
      },
      {new : true}
    );
    res.json({msg:"materia eliminada correctamente", materiaBorrada});
    return materiaBorrada;
  } catch (error) {
    res.json({msg:"ocurrio un error",error});
    console.log(error);
  }
};

//agregar comentario
ctrlAdministrativos.agregarComentario = async (req, res) => {
  try {
    const {id} = req.params;
    const {comentarios} = req.body;
    const nComentario =  await Anuncio.findOneAndUpdate(
      {id},
      {$push:
      {comentarios},
      },
      {new : true}
    )
    return res.json({nComentario});
  } catch (error) {
    res.json({msg:"ocurrio un error",error});
    console.log(error);
  } 
};

//borrar comentario
ctrlAdministrativos.borrarComentario = async (req, res) => {
  const {id} = req.params;
  const {_id} = req.body;
  try {
    const bComentario = await Anuncio.findOneAndUpdate(
      {id, "comentarios._id":_id},
      {$set:
        {"comentarios.$.activo":false}
      },
      {new : true})
      return res.json({bComentario}
)
  } catch (error) {
    console.log(error);
    return res.json({msg:"ocurrio un error",error});
  }
};

ctrlAdministrativos.mostrarDatosLogueado = async (req, res)  => {
  return res.json({usuario : req.user});
}



module.exports = ctrlAdministrativos;
