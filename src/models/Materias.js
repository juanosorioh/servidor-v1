const mongoose = require("mongoose");

const MateriasSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  profesores: [{}],

  notas: [
    {
      alumno: { type: mongoose.Schema.Types.ObjectId, ref: "personas" },
      parcial1: { type: String },
      parcial2: { type: String },
      recuperatorio1: { type: String },
      recuperatorio2: { type: String },
      recuperatorioIntegrador: { type: String },
      notaFinal: { type: String },
      estado: { type: String },
    },
  ],
  asistencia: [
    { fecha: { type: Date }, alumno: {type: mongoose.Schema.Types.ObjectId, ref: "personas"} }, 
  ],
  activo: { type: Boolean, default: true },
});

module.exports = Materias = mongoose.model("materias", MateriasSchema);
