import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  queixaPrincipal: string = '';
  hma: string = '';
  historicoFamiliar: string = '';
  atividadeFisica: boolean = false;
  fuma: boolean = false;
  cigarrosDia: string = '';
  bebidas: string = '';
  vezesSemana: string = '';
  impedeTarefa: boolean = false;
  pa: string = '';
  peso: string = '';
  altura: string = '';
  eav: string = '';
  dadosComplementares: string = '';

  // URL da API
  private apiUrl = 'http://localhost:3333/fichas';

  constructor(private http: HttpClient) { }

  // Método para salvar o formulário
  salvarFormulario() {
    console.log('Dados enviados:', {
      nome: this.nome,
      idade: this.idade,
      cns: this.cns,
      endereco: this.endereco,
      sexo: this.sexo,
      fone: this.fone,
      profissao: this.profissao,
      diagnostico: this.diagnostico,
      cid: this.cid,
      queixaPrincipal: this.queixaPrincipal,
      hma: this.hma,
      historicoFamiliar: this.historicoFamiliar,
      atividadeFisica: this.atividadeFisica,
      fuma: this.fuma,
      cigarrosDia: this.cigarrosDia,
      bebidas: this.bebidas,
      vezesSemana: this.vezesSemana,
      impedeTarefa: this.impedeTarefa,
      pa: this.pa,
      peso: this.peso,
      altura: this.altura,
      eav: this.eav,
      dadosComplementares: this.dadosComplementares
    });

    // Construir o objeto a ser enviado
    const dadosFormulario = {
      nome: this.nome,
      idade: this.idade,
      cns: this.cns,
      endereco: this.endereco,
      sexo: this.sexo,
      fone: this.fone,
      profissao: this.profissao,
      diagnostico: this.diagnostico,
      cid: this.cid,
      queixa_principal: this.queixaPrincipal,
      hma: this.hma,
      historico_familiar: this.historicoFamiliar,
      atividade_fisica: this.atividadeFisica,
      fuma: this.fuma,
      cigarrosDia: this.cigarrosDia,
      bebidas: this.bebidas,
      vezesSemana: this.vezesSemana,
      impedeTarefa: this.impedeTarefa,
      pa: this.pa,
      peso: this.peso,
      altura: this.altura,
      eav: this.eav,
      dados_complementares: this.dadosComplementares
    };

    // Enviar os dados para a API
    this.http.post(this.apiUrl, dadosFormulario).subscribe(
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
