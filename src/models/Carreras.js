const mongoose = require("mongoose");

const carrerasSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  anio: { type: Date, required: true },

  materias: [{type: mongoose.Schema.Types.ObjectId, ref: "materias"}],

  activo: { type: Boolean, default: true },
});

module.exports = Carreras = mongoose.model("carreras", carrerasSchema);
