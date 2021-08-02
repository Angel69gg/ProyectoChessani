import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarArticuloPageRoutingModule } from './registrar-articulo-routing.module';

import { RegistrarArticuloPage } from './registrar-articulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarArticuloPageRoutingModule
  ],
  declarations: [RegistrarArticuloPage]
})
export class RegistrarArticuloPageModule {}
