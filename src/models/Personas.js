const mongoose = require("mongoose");

const PerfilSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  birthdate: {
    type: String,
  },
  dni: {
    type: Number,
  },
  telefono: {
    type: String,
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
