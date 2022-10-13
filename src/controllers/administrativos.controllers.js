const Personas = require('../models/Personas');
const ctrlAdministrativos = {};

//borrar personas de manera logica
/* ctrlAdministrativos.borrarPersonas = async (req, res)=>{
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
} */


ctrlAdministrativos.mostrarAlumnosActivos= async (req, res) => {
        
}
ctrlAdministrativos.mostrarAlumnosTotales= async (req, res) => {
        
}
ctrlAdministrativos.mostrarProfesoresActivos= async (req, res) => {
        
}
ctrlAdministrativos.mostrarProfesoresTotales= async (req, res) => {
        
}
ctrlAdministrativos.mostrarAdministrativosActivos= async (req, res) => {
        
}
ctrlAdministrativos.mostrarAdministrativosTotales= async (req, res) => {
        
}
ctrlAdministrativos.agregarAlumnos= async (req, res) => {
        
}
ctrlAdministrativos.agregarProfesores= async (req, res) => {
        
}
ctrlAdministrativos.agregaradministrativos= async (req, res) => {
        
}
ctrlAdministrativos.modificarAlumnos= async (req, res) => {
        
}
ctrlAdministrativos.modificarProfesores= async (req, res) => {
        
}
ctrlAdministrativos.modificaradministrativos= async (req, res) => {
        
}
ctrlAdministrativos.borrarAlumnos= async (req, res) => {
        
}
ctrlAdministrativos.borrarProfesores= async (req, res) => {
        
}
ctrlAdministrativos.borraradministrativos= async (req, res) => {
        
}
ctrlAdministrativos.agregarComentarios= async (req, res) => {
        
}
ctrlAdministrativos.modificarComentarios= async (req, res) => {
        
}
ctrlAdministrativos.borrarComentarios= async (req, res) => {
        
}
ctrlAdministrativos.verAnuncios= async (req, res) => {
        
}
ctrlAdministrativos.agregarAnuncios= async (req, res) => {
        
}
ctrlAdministrativos.modificarAnuncios= async (req, res) => {
        
}
ctrlAdministrativos.borrarAnuncios= async (req, res) => {
        
}


module.exports = ctrlAdministrativos;