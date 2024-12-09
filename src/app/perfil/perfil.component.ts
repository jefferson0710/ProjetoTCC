import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  formData: any = {
    name: '',
    idade: 0,
    cns: '',
    cpf: '',
    endereco: '',
    profissao: '',
    diagnostico: '',
    sexo: '',
    telefone: '',
    queixa_principal: '',
    hma: '',
    historico_familiar: '',
    atividade_fisica: false, // Agora é um boolean
    fuma: false,             // Agora é um boolean
    vezes: '',               // Mantém como string para inputs adicionais
    alcool: false,           // Agora é um boolean
    tarefa: false,    // Agora é um boolean
    pa: '',
    altura: '',
    eav: '',
    dados_complementares: ''
  };

  // URL da API
  private apiUrl = 'http://localhost:3333/fichas';

  constructor(private http: HttpClient, private router: Router, ngbModalService: NgbModal) { }

  salvarFormulario() {
    const payload = {
      ...this.formData,
      sexo: this.formData.sexo === 'masculino' ? 0 : this.formData.sexo === 'feminino' ? 1 : undefined,
    };
    this.http.post('http://localhost:3333/fichas', payload).subscribe({
      next: (res) => {
        alert('Formulário salvo com sucesso!');
        console.log('Formulário salvo com sucesso!', res);
      },

      error: (err) => {
        alert('Erro ao salvar o formulário. Verifique os dados e tente novamente.');
        console.error('Erro ao salvar o formulário:', err);
      },
    });
  }







}
