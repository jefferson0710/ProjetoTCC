import { Component, input, output, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';
import { RouterLink } from '@angular/router';
import { CadastroUsuarioComponent } from '../cadastro-usuario/cadastro-usuario.component';
import { PacientesComponent } from '../pacientes/pacientes.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: '',
      icon: 'fal fa-home',
      label: 'Início',
    },
    {
      routeLink: 'perfil',
      icon: 'fal fa-file',
      label: 'Ficha de Anamnese',
    },
    {
      routeLink: 'pacientes',
      icon: 'fal fa-user',
      label: 'Pacientes',
    },
    {
      routeLink: 'colaboradores',
      icon: 'fal fa-users',
      label: 'Colaboradores',
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Configuração',
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-door-open',
      label: 'Sair',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
