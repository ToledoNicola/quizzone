import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// mdbootstrap
import { MDBBootstrapModule } from "angular-bootstrap-md";
// firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { ContattiComponent } from "./contatti/contatti.component";
import { ListaQuizComponent } from "./lista-quiz/lista-quiz.component";
import { QuizComponent } from "./quiz/quiz.component";
import { LoginComponent } from './login/login.component';
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ContattiComponent,
    ListaQuizComponent,
    QuizComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
