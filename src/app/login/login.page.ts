import { Component, OnInit } from '@angular/core';
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




}
