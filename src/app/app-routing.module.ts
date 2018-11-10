import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { ContattiComponent } from "./contatti/contatti.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "creaQuiz", component: InfoComponent },
  { path: "contatti", component: ContattiComponent },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
