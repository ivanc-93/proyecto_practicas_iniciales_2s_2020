import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {RouterModule,Routes}from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrarseComponent } from './Registrarse/registrarse/registrarse.component';
import { usuarioServicio } from './servicios/usuarioServicio';
import { PantallaPrincipalComponent } from './PantallaPrincipal/pantalla-principal/pantalla-principal.component';
import { RecuperarComponent } from './Login/recuperar/recuperar.component';
import { NuevopasswordComponent } from './Login/nuevopassword/nuevopassword.component';

const Rutas:Routes=[

  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'registrarse',component:RegistrarseComponent},
  {path:'pantallaPrincipal',component:PantallaPrincipalComponent},{
    path:'recuperarPassword', component: RecuperarComponent
  },{
    path:'nuevopassword', component: NuevopasswordComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    PantallaPrincipalComponent,
    RecuperarComponent,
    NuevopasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Rutas),
    
  ],
  providers: [usuarioServicio,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
