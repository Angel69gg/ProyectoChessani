import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../models/usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
password: string;
usuario: string;
email: string;
tipoUsuario: string;
selectedUsuario:Usuario;
  usuarios:Usuario[];
  readonly URL_API2 ='http://localhost:3000/api/usuarios'
  constructor(private router:Router, private alertController:AlertController, public http: HttpClient) {
    this.selectedUsuario= new Usuario("","","","","")
   }
   
   postUsuario(Usuario: Usuario){
    return this.http.post(this.URL_API2,Usuario)
  }
    login(Usuario: Usuario){
      return this.http.post(this.URL_API2 +'/login',Usuario)
    }
   carrito(){
    this.router.navigate(['/carrito']);
   }
   agarticulo(){
    this.router.navigate(['/registrar-articulo']);
   }
   
   SignIn(){
    this.router.navigate(['/sign-in']);
   }
   goBack(){
    this.router.navigate(['/login']);
   }
   logout(){
    localStorage.removeItem('userApp')
    this.router.navigate(['/login']);
  }
  getUsuario(){
    return this.http.get(this.URL_API2);
  }
  async iniciarSesion(){
    if(this.usuario == 'User1' && this.password == 'pass123'){
      let usuarioLoggeado = {
        user:this.usuario,
        email:'usuario@gmail.com',
        tipoUser:'admin'
      }
      localStorage.setItem('userApp',JSON.stringify(usuarioLoggeado))
      this.router.navigate(['/tabs/tab1']);
    }else{
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'ERROR',
          message: 'CREDENCIALES INVALIDAS',
          buttons: ['OK']
        });
    
        await alert.present();
    }
  }
}
