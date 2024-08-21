import { Component, input, output, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';
import { RouterLink } from '@angular/router';
import { CadastroUsuarioComponent } from '../cadastro-usuario/cadastro-usuario.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public isSidebar: boolean = false;

  onSave() {
    this.isSidebar = !this.isSidebar;
  }

}
