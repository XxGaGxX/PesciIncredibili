import { Component, signal, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // NOTA: era "styleUrl", deve essere "styleUrls"
})
export class LoginComponent {
  private authService = inject(AuthService);

  hide = signal(true);
  email = signal('');     // ✅ Signal to store email input
  password = signal('');  // ✅ Signal to store password input

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  Login(Email: string, Password: string) {
    console.log('Email:', Email);
    console.log('Password:', Password);

    if (Email && Password) {
      this.authService.login(Email, Password);
    } else {
      alert('Please enter both email and password.');
    }
  }
}


