import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from '../Componenti/login/login.component'; 
import { CatalogoComponent } from '../Componenti/catalogo/catalogo.component';
import { HomeComponent } from '../Componenti/home/home.component'; 
import { AboutComponent } from '../Componenti/about/about.component';

export const routes: Routes = [
  {
    path : "login",
    component : LoginComponent
  },
  {
    path: "catalogo",
    component : CatalogoComponent
  },
  {
    path: "",
    component : HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
  
];
