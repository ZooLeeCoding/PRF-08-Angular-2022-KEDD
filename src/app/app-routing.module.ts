import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlapozasComponent } from './alapozas/alapozas.component';

const routes: Routes = [
  { path: 'alapozas', component: AlapozasComponent },
  { path: '', pathMatch: 'full', redirectTo: 'alapozas' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
