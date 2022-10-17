const Alumno = require("../models/Personas");
const Anuncio = require("../models/Anuncios")
const ctrlProfesor = {};

//mostrar los alumnos
ctrlProfesor.mostrarAlumnos = async (req, res) =>{
    const alumnos = await Alumno.find({activo:true});
    res.json({alumnos});
    return alumnos;
}


//!mostrar Anuncios
ctrlProfesor.mostrarAnuncios = async (req, res) => {
        const anuncios = await Anuncio.find();
        res.json({anuncios});
        return anuncios;
}

//!crear Anuncios
ctrlProfesor.crearAnuncios = async (req, res) => {
        const {
        autor,
        fecha,
        anuncio,
        materias,
        comentarios:[{}]
    } = req.body;
        const newAnuncio = new Anuncio({
            autor,
            fecha,
            anuncio,
            materias,
            comentarios:[{}]
        });
        await newAnuncio.save();
        res.json({msg:"anuncio creado",newAnuncio});
        return newAnuncio;
        
}

//!modificar Anuncios
ctrlProfesor.modificarAnuncios = async (req, res) => {
        const {fecha, anuncio, materias} = req.body;
        const { id } = req.params;
      /*  for (let i = 0; i < materias.length; i++) {
        const name = materias[i];
        const objMateria = await Materia.find(name:name);

        var array = [array, ...objMateria ] */
       
        try {
            await Anuncio.findByIdAndUpdate(id,{fecha, anuncio, materias})
        res.json({msg:"editado correctamente",Anuncio})
        } catch (error) {
            console.log("falló",error)
        }
}

//!borrar Anuncios
ctrlProfesor.borrarAnuncios = async (req, res) => {
        const { id } = req.params;
        try {
            await Anuncio.findByIdAndDelete(id);
            res.json({msg:"anuncio eliminado correctamente"});
        } catch (error) {
            console.log(error);
        }

}

//!Crear Comentarios
ctrlProfesor.CrearComentarios = async (req, res) => {
        const {comentarios:[
            autorComent,
            comentario,
            fechaComent
        ]} = req.body;
        const newComent = {
            comentarios:[
                autorComent,
                comentario,
                fechaComent
            ]
        }
       try {
        await Anuncio.comentarios.push(newComent);
        res.json({msg:"comentario agregado correctamente", newComent});
        return newComent;
       } catch (error) {
        console.log(error);
       }
}

//!borrar Comentarios
ctrlProfesor.borrarComentarios = async (req, res) => {
        const { id } = req.params;
       try {
        await Anuncio.comentarios.findByIdAndDelete(id);
       } catch (error) {
        console.log(error);
       }
}

//!modificar Comentarios
ctrlProfesor.modificarComentarios = async (req, res) => {
        
}

//!modificar Notas
ctrlProfesor.modificarNotas = async (req, res) => {
        
}

module.exports = ctrlProfesor;