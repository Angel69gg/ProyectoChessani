import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  password: string;
usuario: string;
email: string;
tipoUsuario: string;
  constructor(private router:Router, private alertController:AlertController) {
    this.usuario='';
    this.email='';
    this.tipoUsuario='';
    this.password='';
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
