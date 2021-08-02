export class Articulo {
    constructor(_id='', Imagen='' , Nombre='',Tipo='',Descripcion='',Precio=0){
this._id=_id;
this.Imagen=Imagen;
this.Nombre=Nombre;
this.Tipo=Tipo;
this.Descripcion=Descripcion;
this.Precio=Precio; 
    }
    
    _id: string;
    Imagen: string;
    Nombre: string;
    Tipo: string;
    Descripcion:string;
    Precio: number;
}