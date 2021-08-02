const Articulo = require("../models/articulo");

const ArticuloCtrl = {};

ArticuloCtrl.getArticulo = async (req, res, next) => {
  const articulo = await Articulo.find();
  res.json(articulo);
};

ArticuloCtrl.createArticulo = async (req, res, next) => {
  const articulo = new Articulo({
    Imagen: req.body.Imagen,
    Nombre: req.body.Nombre,
    Descripcion: req.body.Descripcion,
    Precio: req.body.Precio,
  });
  await articulo.save();
  res.json({ status: "articulo creado" });
};



ArticuloCtrl.editArticulo = async (req, res, next) => {
  const { id } = req.params;
  await Articulo.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Articulo Updated" });
};

ArticuloCtrl.deleteArticulo = async (req, res, next) => {
  await Articulo.findByIdAndRemove(req.params.id);
  res.json({ status: "Articulo Deleted" });
};

module.exports = ArticuloCtrl;
