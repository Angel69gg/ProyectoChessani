import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
usuario:string;
  constructor(public actRoute: ActivatedRoute,
    public router:Router,public userService:UsuarioService) {}
  
  
}
