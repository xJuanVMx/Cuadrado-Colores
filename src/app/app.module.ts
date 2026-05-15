import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuadradoComponent } from './components/cuadrado/cuadrado.component';
import { BotonComponent } from './components/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadradoComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
