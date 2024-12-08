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
  styleUrl: './pacientes.component.scss',
})
export class PacientesComponent {
  cpf: string = ''; // CPF que será buscado
  resultado: any = null; // Armazena o resultado da busca
  isEditando: boolean = false; // Define se está no modo de edição

  constructor(private pacienteService: PacienteService) { }

  // Busca o paciente pelo CPF
  buscarPaciente() {
    if (this.cpf) {
      this.pacienteService.buscarPorCpf(this.cpf).subscribe(
        (data) => {
          console.log(data);
          this.resultado = data; // Preenche os dados do paciente no modal
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

  // Salva as alterações feitas no modal
  salvarAlteracoes() {
    if (this.resultado && this.resultado.id) {
      this.pacienteService.atualizarPaciente(this.resultado.id, this.resultado).subscribe(
        (response) => {
          console.log('Dados atualizados com sucesso:', response);
          alert('As informações foram salvas com sucesso!');
          this.isEditando = false; // Sai do modo de edição
        },
        (error) => {
          console.error('Erro ao salvar alterações:', error);
          alert('Erro ao salvar as alterações. Tente novamente.');
        }
      );
    } else {
      console.warn('Não há informações de paciente para atualizar');
    }
  }
}
