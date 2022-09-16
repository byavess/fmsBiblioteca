import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestesComponent } from './testes/testes.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { Tservice } from './tservice.service';

@NgModule({
  declarations: [
    AppComponent,
    TestesComponent,
    BebidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Tservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
