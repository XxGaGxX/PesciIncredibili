import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
