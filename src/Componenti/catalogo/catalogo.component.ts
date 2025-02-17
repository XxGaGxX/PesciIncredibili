import { Component, OnInit } from '@angular/core';
import { Pesce } from '../../model/Classi'
import { Specie } from '../../model/Classi';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';


@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, NgFor, CommonModule, MatIconModule, NavbarComponent, RouterLink, RouterLinkActive, MatGridListModule, HttpClientModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent {
  http = inject(HttpClient);
  pesci : any;

  constructor() {}
  ngOnInit() : void {
    this.getFish()
  }

  getFish() {
    this.http.get('http://localhost:8090/api/catalogo').subscribe({
      next: (fishes: any) => {
        this.pesci = fishes;
        console.log(this.pesci)
      },
      error: () => {
        console.error('Impossibile accedere ai dati');
      }
    });
  }
}
