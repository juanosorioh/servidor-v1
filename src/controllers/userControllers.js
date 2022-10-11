const User = require("../models/Personas");
const ctrlUser = {};

//agregar un usuario //!controlador funcionando pero solo a modo de prueba ya que debe ir en los controladores de administrativos

/* ctrlUser.agregarUsuario = async (req, res) => {

todo: desestructuramos los datos

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
  
  todo: creamos un nuevo usuario
  
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

//mostrar usuarios activos
ctrlUser.mostrarUsuariosActivos = async (req, res) => {
  const user = await User.find({activo:true});
  res.json({ user });
  return user;
};

//mostrar usuarios totales
ctrlUser.mostrarUsuariosTotales = async (req, res) => {
  const user = await User.find();
  res.json({ user });
  return user;
};

//!agregar comentarios

module.exports = ctrlUser;