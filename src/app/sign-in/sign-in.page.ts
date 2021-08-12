import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario.modelo';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(public usuariosService: UsuarioService) { }

  ngOnInit() {
  }
  addUsuario(form: NgForm){
    this.usuariosService.postUsuario(form.value)
    .subscribe(res =>{
      this.resetForm(form);
      console.log(res);
    })
      }
        resetForm(form?: NgForm){
          if(form){
            form.reset();
            this.usuariosService.selectedUsuario= new Usuario();
          }
        }
}
