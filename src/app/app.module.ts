import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlapozasComponent } from './alapozas/alapozas.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { ParameterPeldaComponent } from './parameter-pelda/parameter-pelda.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AlapozasComponent,
    ErrorComponent,
    ParameterPeldaComponent,
  ],
  bootstrap: [AppComponent], //ez lesz az első komponens, ami betöltődik
})
export class AppModule {}
