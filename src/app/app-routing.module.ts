import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { ContattiComponent } from "./contatti/contatti.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "info", component: InfoComponent },
  { path: "contatti", component: ContattiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
