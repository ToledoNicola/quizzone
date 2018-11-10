import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// mdbootstrap
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ContattiComponent } from './contatti/contatti.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, InfoComponent, ContattiComponent],
  imports: [BrowserModule, AppRoutingModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
