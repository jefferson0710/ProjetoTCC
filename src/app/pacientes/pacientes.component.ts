import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PacienteService } from '../services/paciente.service';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule],
  providers: [PacienteService],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss',
})
export class PacientesComponent {
  cpf: string = ''; // CPF que será buscado
  resultado: any = null; // Armazena o resultado da busca
  isEditando: boolean = false; // Define se está no modo de edição
  paciente: any
  constructor(private pacienteService: PacienteService, private ngbModalService: NgbModal, private http: HttpClient, private router: Router) { }

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

  abrirModal(component: any, paciente: any) {
    const modalPacientes = this.ngbModalService.open(component, {
      centered: true,
      keyboard: false,
      size: 'xl',
    })
    this.paciente = paciente
  }
  salvarModal() {
    this.http.put(`https://ultimavezpt2-2.onrender.com/fichas/${this.paciente.id}`, this.paciente).subscribe({
      next: (res) => {
        alert('Ficha de Anamnese atualizada com sucesso!');
        console.log('Formulário salvo com sucesso!', res);
        setTimeout(() => {

          window.location.reload(); // Recarrega a página
        }, 2000);
      },
      error: (err) => {
        alert('Erro ao salvar a ficha. Verifique os dados e tente novamente.');
        console.error('Erro ao salvar o formulário:', err);
      },
    });
  }
  closeModal() {
    this.ngbModalService.dismissAll()
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
