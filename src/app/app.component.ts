import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, LoginComponent, PerfilComponent, CadastroUsuarioComponent, NavbarComponent, PaginaPrincipalComponent, FooterComponent]
})
export class AppComponent {
  title = 'ProjetoTCC';
  isLeftSidebarCollapsed = signal<boolean>(false);
  constructor(private router: Router) { }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

  showNavbar(): boolean {
    return this.router.url !== '/' && this.router.url !== '/cadastro-usuario';
  }
}
