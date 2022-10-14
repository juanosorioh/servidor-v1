const mongoose = require("mongoose");

const anunciosSchema = new mongoose.Schema({
  autor: {type: mongoose.Schema.Types.ObjectId, ref: "personas"},

  fecha: { type: Date, required: true },

  anuncio: { type: String },

  materias: [{type: mongoose.Schema.Types.ObjectId, ref: "materias"}],

  comentarios: [
    {
      autorComent: {type: mongoose.Schema.Types.ObjectId, ref: "personas"},
      comentario: { type: String },
      fechaComent: { type: Date },
    },
  ],
});

module.exports = Anuncios = mongoose.model("anuncios", anunciosSchema);
