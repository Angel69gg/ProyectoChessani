const Usuario = require("../models/usuario");

const UsuarioCtrl = {};

UsuarioCtrl.getUsuario = async (req, res, next) => {
  Usuario.findOne( {Usuario: req.body.Usuario,Contrasena: req.body.Contrasena})
  .then( user =>{
    console.log(user)
    if(user) res.status(200).json({user:user})
    if(!user) res.status(404).json({error: 'Usuario no registrado'})
  }
  )
};
UsuarioCtrl.getUsuarios = async (req, res, next) => {
  const usuario = await Usuario.find();
  res.json(usuario);
};

UsuarioCtrl.createUsuario = async (req, res, next) => {
  const usuario = new Usuario({
    Usuario: req.body.Usuario,
    Contrasena: req.body.Contrasena,
    Email: req.body.Email,
    tipoUsuario: req.body.tipoUsuario,
  });
  await usuario.save();
  res.json({ status: "usuario creado" });
};



UsuarioCtrl.editUsuario = async (req, res, next) => {
  const { id } = req.params;
  await Usuario.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Usuario Updated" });
};

UsuarioCtrl.deleteUsuario = async (req, res, next) => {
  await Usuario.findByIdAndRemove(req.params.id);
  res.json({ status: "Usuario Deleted" });
};

module.exports = UsuarioCtrl;