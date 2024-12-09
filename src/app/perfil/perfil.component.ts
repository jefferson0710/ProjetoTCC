import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  nome: string = '';
  idade: string = '';
  cns: string = '';
  endereco: string = '';
  sexo: string = '';
  fone: string = '';
  profissao: string = '';
  diagnostico: string = '';
  cid: string = '';
  queixaPrincipal: string = ''; // Alterado para que corresponda ao campo da API
  hma: string = '';
  historicoFamiliar: string = ''; // Alterado para que corresponda ao campo da API
  atividadeFisica: boolean = false; // Alterado para tipo booleano
  fuma: boolean = false; // Alterado para tipo booleano
  cigarrosDia: string = '';
  bebidas: string = '';
  vezesSemana: string = '';
  impedeTarefa: boolean = false; // Alterado para tipo booleano
  pa: string = '';
  peso: string = '';
  altura: string = '';
  eav: string = '';
  dadosComplementares: string = '';
  constructor(private http: HttpClient) { }
  // Método para salvar o formulário
  salvarFormulario() {
    // Crie um objeto com os dados do formulário
    const dadosFormulario = {
      nome: this.nome,
      idade: this.idade,
      cns: this.cns,
      endereco: this.endereco,
      sexo: this.sexo, // Preservando o tipo string
      fone: this.fone,
      profissao: this.profissao,
      diagnostico: this.diagnostico,
      cid: this.cid,
      queixa_principal: this.queixaPrincipal, // Alterado para que corresponda ao campo da API
      hma: this.hma,
      historico_familiar: this.historicoFamiliar, // Alterado para que corresponda ao campo da API
      atividade_fisica: this.atividadeFisica, // Enviado como booleano
      fuma: this.fuma, // Enviado como booleano
      cigarrosDia: this.cigarrosDia,
      bebidas: this.bebidas,
      vezesSemana: this.vezesSemana,
      impedeTarefa: this.impedeTarefa, // Enviado como booleano
      pa: this.pa,
      peso: this.peso,
      altura: this.altura,
      eav: this.eav,
      dados_complementares: this.dadosComplementares // Alterado para que corresponda ao campo da API
    };
    // Enviar os dados para a API via POST
    this.http.post('http://127.0.0.1:3333/fichas', dadosFormulario)
      .subscribe(
        (response) => {
          console.log('Formulário salvo com sucesso!', response);
          alert('Formulário salvo com sucesso!');
        },
        (error) => {
          console.error('Erro ao salvar o formulário:', error);
          alert('Erro ao salvar o formulário');
        }
      );
  }
}
