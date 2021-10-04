import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import {GeneralComponent} from "./components/general/general.component";
import {ProfileComponent} from "./components/pages/profile/profile.component";
import {AuthGuard} from "@auth0/auth0-angular";

const routes: Routes = [
  {
    path:"",
    component:LandingComponent},
  {
    path:'general',
    component:GeneralComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'bookingPage',
  //   canActivate: [AuthGuard]
  // }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
