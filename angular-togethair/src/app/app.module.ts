import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';
import { GeneralComponent } from './components/general/general.component';
import {AuthModule} from "@auth0/auth0-angular";

import {environment as env} from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AddButtonsComponent } from './components/add-buttons/add-buttons.component';
import { CartComponent } from './components/cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LandingComponent,
    GeneralComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    ProfileComponent,
    AddButtonsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({...env.auth})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
