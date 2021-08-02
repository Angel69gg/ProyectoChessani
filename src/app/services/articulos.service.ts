import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../models/articulo.modelo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  
  selectedArticulo:Articulo;
  articulos:Articulo[];
  readonly URL_API ='http://localhost:3000/api/articulos'
  constructor(public http: HttpClient) {
    this.selectedArticulo= new Articulo("","","","","",0)
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

