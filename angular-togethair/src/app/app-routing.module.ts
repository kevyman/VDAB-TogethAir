import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import {GeneralComponent} from "./components/general/general.component";

const routes: Routes = [
  {
    path:"",
    component:LandingComponent},
  {
    path:'general',
    component:GeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
