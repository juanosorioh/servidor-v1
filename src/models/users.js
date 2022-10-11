const mongoose = require("mongoose");

//!solo para pruebas

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  activo: { type: Boolean, default: true },
});

module.exports = mongoose.model("User", UserSchema);
