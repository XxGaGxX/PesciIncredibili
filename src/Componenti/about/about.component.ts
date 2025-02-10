import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { NgFor, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, NgFor, CommonModule, HttpClientModule],  // Add HttpClientModule here
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  http = inject(HttpClient);        
  clienti: any;

  MostraClienti() {
    this.http.get('http://localhost:8090/api/clienti').subscribe({
      next: (clients) => {
        this.clienti = clients;
        console.log(this.clienti)
      },
      error: (errore) => {
        console.error('Impossibile accedere ai dati');
      }
    });
  }
}
