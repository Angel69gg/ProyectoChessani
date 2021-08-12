import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo.modelo';
import { ArticulosService } from '../services/articulos.service';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
 
  carrito: Articulo[]=[];
  constructor(public articulosService:ArticulosService,public userService: UsuarioService) {

   }

  ngOnInit() {
  this.carrito=  this.articulosService.obtenerCarrito()
  }


}
