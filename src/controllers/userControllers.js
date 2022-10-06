const User = require("../models/Personas");
const ctrlUser = {};

//agregar un usuario
ctrlUser.agregarUsuario = async (req, res) => {
  //desestructuramos los datos
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
            alumno
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
  
  //creamos un nuevo usuario =>alumno
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
            alumno
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
};

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

//borrado logico
ctrlUser.borrarUsuario = async (req, res) =>{
  const {id} = req.params;
  const user = await User.findByIdAndUpdate(id, {activo:false})
  res.json({msg:"usuario eliminado correctamente: ",user})
return user;
};

module.exports = ctrlUser;