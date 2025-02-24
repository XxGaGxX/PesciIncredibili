import { Component, signal, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import sha256 from 'crypto-js/sha256';
import { HmacSHA256, enc  } from 'crypto-js';

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
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // NOTA: era "styleUrl", deve essere "styleUrls"
})
export class LoginComponent {
  http = inject(HttpClient)
  private authService = inject(AuthService);

  hide = signal(true);
  email = signal('');     // ✅ Signal to store email input
  password = signal('');  // ✅ Signal to store password input

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  Login(Email: string, Password: string) {
    this.http.get(`http://localhost:8090/api/login/${Email}`).subscribe({
      next : (account:any) => {
        console.log(account)
        var SHA = require("crypto-ts").SHA256;
        console.log(SHA256(Password))
        
      }
    })
  }
}


