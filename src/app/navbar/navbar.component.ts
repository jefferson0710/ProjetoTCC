import { Component, input, output, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public isSidebar: boolean = false;

  onSave() {
    this.isSidebar = !this.isSidebar;
  }

}
