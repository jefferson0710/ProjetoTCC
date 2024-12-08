import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {
  formData: any = {
    username: '',
    email: '',
    password: '',
    name: '',
    idade: null,
    nascimento: '', // Formato ISO: 'YYYY-MM-DD'
    cpf: '',
    telefone: '',
    ceffito: '',
    lembre_se: 'sempre' // Campo opcional, pode ser vazio
  };

  private apiUrl = 'http://127.0.0.1:3333/users'; // URL da sua API

  constructor(private http: HttpClient, private router: Router) { }

  enviarFormulario() {
    console.log('Dados enviados:', this.formData);

    if (!this.formData.username || !this.formData.email || !this.formData.password || !this.formData.nascimento || !this.formData.cpf) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    // Convertendo a data de nascimento para o formato ISO (YYYY-MM-DD)
    if (this.formData.nascimento) {
      const partes = this.formData.nascimento.split('/');
      if (partes.length === 3) {
        const [dia, mes, ano] = partes;
        this.formData.nascimento = `${ano}-${mes}-${dia}`;
      }
    }

    // Enviar os dados do formulário para a API
    this.http.post(this.apiUrl, this.formData).subscribe(
      (response) => {
        console.log('Cadastro realizado com sucesso:', response);
        alert('Usuário cadastrado com sucesso!');

        // Redirecionar para a tela de login após o cadastro bem-sucedido
        setTimeout(() => {
          this.router.navigate(['/']); // Redireciona para a tela de login ou página inicial
        }, 2000);
      },
      (error) => {
        console.error('Erro ao cadastrar o usuário:', error);
        alert('Ocorreu um erro ao tentar cadastrar o usuário.');
      }
    );
  }
}
