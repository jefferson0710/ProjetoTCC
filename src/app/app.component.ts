import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, LoginComponent, PerfilComponent, CadastroUsuarioComponent, NavbarComponent, PaginaPrincipalComponent, FooterComponent]
})
export class AppComponent {
  title = 'ProjetoTCC';
  isLeftSidebarCollapsed = signal<boolean>(false);

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
