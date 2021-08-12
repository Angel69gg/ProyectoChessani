import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string;
  password:string;
  constructor(public alertController: AlertController,
    public router:Router,public userService:UsuarioService) {
      this.usuario = this.password='';
     }

  ngOnInit() {
  }
  login(form: NgForm){
    this.userService.login(form.value)
    .subscribe(res =>{
      //programar redireccion automatica
      console.log(res);
      if(res["user"]){
        localStorage.setItem('userApp',JSON.stringify(res["user"]))
        this.router.navigate(['/tabs/tab1']); 
      }
    },err=>{alert("Credenciales invalidas")})
  }



}
