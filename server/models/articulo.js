const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticuloSchema = new Schema(
  {
    Imagen: String,
    Nombre: String,
    Tipo: String,
    Descripcion: String,
    Precio: Number
  }
);

module.exports = mongoose.model("Articulo", ArticuloSchema);
