import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioService } from './services/usuario.service';
import {ArticulosService} from './services/articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router:Router,public userService:UsuarioService,public articuloService:ArticulosService) {
    let usuarioLoggeado = localStorage.getItem('userApp');//string
    if(usuarioLoggeado){
      console.log('string',usuarioLoggeado);
      let user = JSON.parse(usuarioLoggeado);//Convertimos el string a JSON
      console.log('json',user)
      let tipo= user.tipoUsuario
      console.log(tipo)
      this.userService.tipoUsuario=tipo;
      this.userService.usuario=user.user;
      this.router.navigate(['tabs/tab1']);
    }else {
      
      this.router.navigate(['/login']);
    }
  
  }
}
