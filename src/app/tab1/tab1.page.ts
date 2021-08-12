import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../models/articulo.modelo';
import { Usuario } from '../models/usuario.modelo';
import { ArticulosService } from '../services/articulos.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
usuario:string;
  
  constructor(public actRoute: ActivatedRoute,
    public router:Router,public userService:UsuarioService,public articuloService:ArticulosService) {}
  ngOnInit(){
this.getArticulos();  

  }
  
 
  getArticulos(){
    this.articuloService.getArticulos()
    .subscribe(res =>{
      this.articuloService.articulos = res as Articulo[];
      console.log(res);
    });
  }
  getUsuario(){
    this.userService.getUsuario()
    .subscribe(res =>{
      this.userService.usuarios = res as Usuario[];
      console.log(res)
    });
  }
  getUsuarios(){
    this.userService.getUsuario()
    .subscribe(res =>{
      this.userService.usuarios = res as Usuario[];
      console.log(res)
    });
  }

  deleteArticulos(_id: string){
    if(confirm("Seguro que deseas borrar el articulo?")){
    this.articuloService.deleteArticulo(_id)
    .subscribe(res =>{
     this.getArticulos()
    });
  }
}
agregarAlCarrito(Articulo){
  console.log("anadido correctamente")
  this.articuloService.agregarArticulo(Articulo);
  console.log(Articulo)
}
  

  
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


}
