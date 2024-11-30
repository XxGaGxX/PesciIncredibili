import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from '../Componenti/login/login.component'; 
import { CatalogoComponent } from '../Componenti/catalogo/catalogo.component';

export const routes: Routes = [
  {
    path : "login",
    component : LoginComponent
  },
  {
    path: "catalogo",
    component : CatalogoComponent
  }
];
