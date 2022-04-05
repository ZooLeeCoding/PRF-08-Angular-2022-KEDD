import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlapozasComponent } from './alapozas/alapozas.component';
import { ErrorComponent } from './error/error.component';
import { ParameterPeldaComponent } from './parameter-pelda/parameter-pelda.component';

const routes: Routes = [
  { path: 'alapozas', component: AlapozasComponent },
  // az így megadott paraméter kötelező, tehát ha nem úgy használom, hogy <url>/parameter/<x,y,z,1-10 bármi> akkor nem fogja feldolgozni ezt a route-ot és a hibakezelő lép életbe
  { path: 'parameter/:valami', component: ParameterPeldaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'alapozas' },
  { path: '**', component: ErrorComponent },
  // az Angular sorban halad végig a Routes tömbön, amíg egyezést nem talál a keresett route-ra, a wildcard ** route viszont minden létező stringre egyezést ad vissza, tehát ennek az utolsónak kell lennie a sorban, különben kitakarhat érvényes útvonalakat és definíciókat
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
