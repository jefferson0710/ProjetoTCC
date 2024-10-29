import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PacienteService } from '../services/paciente.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterLink, RouterOutlet, RouterLinkActive, FormsModule],
  providers: [PacienteService],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss'
})
export class PacientesComponent {
  cpf: string = ''; // CPF que será buscado
  resultado: any; // Armazena o resultado da busca

  constructor(private pacienteService: PacienteService) { }

  buscarPaciente() {
    if (this.cpf) {
      this.pacienteService.buscarPorCpf(this.cpf).subscribe(
        (data) => {
          console.log(data)
          this.resultado = data;
          console.log('Dados do paciente:', data);
        },
        (error) => {
          console.error('Erro ao buscar paciente:', error);
          this.resultado = { error: 'Paciente não encontrado' };
        }
      );
    } else {
      console.warn('CPF não foi fornecido');
    }
  }


}
