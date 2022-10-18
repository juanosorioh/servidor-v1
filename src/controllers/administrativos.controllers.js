const Persona = require('../models/Personas');
const Materia = require('../models/Materias');
const Anuncio = require('../models/Anuncios');
const Carrera = require('../models/Carreras')
const ctrlAdministrativos = {};


ctrlAdministrativos.mostrarAlumnosActivos= async (req, res) => {
        try {
          const alumnos = await Persona.find({activo:true});
        res.json({alumnos});
        return alumnos;
        } catch (error) {
          res.json(error);
          console.log(error);
        }
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

ctrlAdministrativos.mostrarMaterias = async (req, res) =>{
  try {
    const materias = await Materia.find({activo:true});
  res.json({materias});
  return materias;
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}
ctrlAdministrativos.mostrarCarreras = async (req, res) =>{

}
ctrlAdministrativos.mostrarAnuncios = async (req, res) =>{

}



ctrlAdministrativos.agregarCarreras= async (req, res) => {
        
}




ctrlAdministrativos.agregarMaterias= async (req, res) => {
        const materia = req.body;
        const newMateria = new Materia ({
          nombre: materia.nombre,
          descripcion: materia.descripcion,
          profesores: materia.profesores,
          notas: materia.notas,
          asistencia: materia.asistencia,
          clasesDictadas: materia.clasesDictadas
        });
        await newMateria.save();
        res.json({msg:"materia agregada correctamente", newMateria });
      return newMateria;
}


ctrlAdministrativos.agregarAlumnos= async (req, res) => {
  
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
                tipo
              },
            ],
            datosAlumno: [
              {
                carrera,
                titulo
              } ],
            datos: { datos },
          },
        ]
      }  = req.body;
      
      //todo: creamos un nuevo alumno
      
      const nAlumno = new Persona({

      //todo funcional pero muy molesto
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
                tipo:"alumno"
              },
            ],
            datosAlumno: [
              {
                carrera,
                titulo,
              } ],
            datos: { datos }
          },
        ]
      });
      await nAlumno.save();
      res.json({msg:"usuario agregado correctamente", nAlumno });
      return nAlumno;
    };


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


ctrlAdministrativos.borrarComentarios= async (req, res) => {
        
}


ctrlAdministrativos.verAnuncios= async (req, res) => {
        
}


ctrlAdministrativos.agregarAnuncios= async (req, res) => {
        
}


ctrlAdministrativos.borrarAnuncios= async (req, res) => {
        
}


module.exports = ctrlAdministrativos;