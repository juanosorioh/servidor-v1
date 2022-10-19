const mongoose = require("mongoose");

const PerfilSchema = new mongoose.Schema({
  /* idUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }, */
  nombre: {
    type: String,
    //required: true,
  },
  apellido: {
    type: String,
    //required: true,
  },
  email: {
    type: String,
    //required: true,
  },
  password: {
    type: String,
    //required: true,
  },
  birthdate: {
    type: String,
    //required: true,
  },
  dni: {
    type: Number,
    //required: true,
  },
  telefono: {
    type: String,
    //required: true,
  },
  perfiles: [
    {
      rol: { type: String, default:"alumno"},
      datosAlumno: {
        carrera: { type: String },
        titulo: { type: String },
      },
      datos: { type: String },
    }
  ],
  activo: { type: Boolean, default: true },
});

module.exports = mongoose.model("personas", PerfilSchema);
