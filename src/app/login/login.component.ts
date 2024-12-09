import { Component, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onLogin() {
    if (this.email === 'admin@hotmail.com' && this.password === 'admin') {
      // Redirecionar para a página de administrador
      this.router.navigate(['/pagina']);
    } else {
      // Exibir mensagem de erro ou tratar de forma diferente
      alert('Credenciais inválidas!');
    }
  }
}
