import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, NgFor, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  http = inject(HttpClient)
  clienti : any
  MostraClienti(){
    this.http.get("http://localhost:3000/api/clienti").subscribe({
      next : clienti => {
        this.clienti = clienti
      },
      error : errore => {
        console.error("Impossibile accedere ai dati")
      }   
    })
  }

  

}
