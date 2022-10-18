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
  profesores: [{type: mongoose.Schema.Types.ObjectId, ref: "personas"}],

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
    { cantidadFaltas: {type: Number,default:0},
      alumno: { type: mongoose.Schema.Types.ObjectId, ref: "personas" },
    },
  ],
  clasesDictadas: {type:Number},
  activo: { type: Boolean, default: true },
});

module.exports = Materias = mongoose.model("materias", MateriasSchema);
