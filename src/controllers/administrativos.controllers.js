const Personas = require('../models/Personas');
const ctrlAdministrativos = {};

//borrar personas de manera logica
ctrlAdministrativos.borrarPersonas = async (req, res)=>{
   const { id } = req.params;
   const datos = req.body;
   const nuevaPersonas = {
    email: datos.email, 
    password: datos.password, 
    nombre: datos.nombre, 
    apellido: datos.apellido, 
    birthdate: datos.birthdate, 
    dni: datos.dni, 
    telefono: datos.telefono, 
    perfiles:[
      {
        rol: [
        {
            alumno: datos.alumno,
            profesor: datos.profesor,
            administrativo: datos.administrativo
          },
        ],
        datosAlumnos: [
          {
            carrera: datos.carrera,
            titulo: datos.titulo
          },
        ],
        datos: [{ datos: datos.datos }],
      },
    ],
    activo:false
   }
   Personas.findByIdAndUpdate(id, nuevaPersonas)
   .then(result =>{ response.json({msg:"usuario modificado correctamente", result})})//res.json({msg:"usuario agregado correctamente", user });
   .catch(err=>{"fallo la modificacion",err})
}

module.exports = ctrlAdministrativos;