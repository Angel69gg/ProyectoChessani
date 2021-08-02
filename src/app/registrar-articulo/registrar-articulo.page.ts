import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Articulo } from '../models/articulo.modelo';
import { ArticulosService } from '../services/articulos.service';


@Component({
  selector: 'app-registrar-articulo',
  templateUrl: './registrar-articulo.page.html',
  styleUrls: ['./registrar-articulo.page.scss'],
})
export class RegistrarArticuloPage implements OnInit {

  constructor(public articulosService: ArticulosService) { }

  ngOnInit() {
  }

  addArticulo(form: NgForm){
this.articulosService.postArticulo(form.value)
.subscribe(res =>{
  this.resetForm(form);
  console.log(res);
})
  }
    resetForm(form?: NgForm){
      if(form){
        form.reset();
        this.articulosService.selectedArticulo= new Articulo();
      }
    }
}
