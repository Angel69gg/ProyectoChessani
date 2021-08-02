const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsuarioSchema = new Schema(
  {
    Usuario: String,
    Contrasena: String,
    Email:String,
    tipoUsuario:String
  }
);

module.exports = mongoose.model("Usuario", UsuarioSchema);
