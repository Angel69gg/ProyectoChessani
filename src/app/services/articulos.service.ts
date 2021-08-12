import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../models/articulo.modelo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  public carrito=[];
  public carritoNumeroItems= new BehaviorSubject(0);
  selectedArticulo:Articulo;
  articulos:Articulo[];
  readonly URL_API ='http://localhost:3000/api/articulos'
  constructor(public http: HttpClient) {
    this.selectedArticulo= new Articulo("","","","","",0)
   }
   obtenerCarrito(){
     return this.carrito;
     
   }

   obtenerCantidadArticulos(){
     return this.carritoNumeroItems;
   }

   agregarArticulo(Articulo){
    let agregado= false;
    for (let a of this.carrito){
      if(a.id == Articulo.id){
        a.cantidad += 1;
        agregado=true;
        break;
      }
    }
    if(!agregado){
      this.carrito.push(Articulo)
      console.log(this.selectedArticulo)
      console.log('carrito',this.selectedArticulo)
    }
    this.carritoNumeroItems.next(this.carritoNumeroItems.value+1)
   }


   getArticulos(){
     return this.http.get(this.URL_API);
   }

   
   postArticulo(Articulo: Articulo){
     return this.http.post(this.URL_API,Articulo)
   }

   putArticulo(Articulo:Articulo){
return this.http.put(this.URL_API + `/${Articulo._id}`,Articulo)
   }

   deleteArticulo(_id: string){
     return this.http.delete(this.URL_API + `/${_id}`)
   }

  
   
}

