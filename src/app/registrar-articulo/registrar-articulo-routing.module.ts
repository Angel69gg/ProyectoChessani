import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarArticuloPage } from './registrar-articulo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarArticuloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarArticuloPageRoutingModule {}
