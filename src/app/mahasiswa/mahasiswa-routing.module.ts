import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MahasiswaPage } from './mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: MahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MahasiswaPageRoutingModule {}
