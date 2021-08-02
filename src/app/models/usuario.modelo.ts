export class Usuario {
    constructor(_id='', Usuario='' , Contrasena='',Email='',tipoUsuario=''){
this._id=_id;
this.Usuario=Usuario;
this.Contrasena=Contrasena;
this.Email=Email;
this.tipoUsuario=tipoUsuario;
    }
    
    _id: string;
    Usuario: string;
    Contrasena: string;
    Email: string;
    tipoUsuario:string
}