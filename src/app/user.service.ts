import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // A URL da sua API. Substitua pelo endpoint correto da sua API
  private apiUrl = 'https://ultimavezpt2-2.onrender.com/users';  // Exemplo de URL

  constructor(private http: HttpClient) { }


  // Criar um novo usuário
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }

  // Listar todos os usuários
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Buscar usuário por CPF
  getUserByCpf(cpf: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/cpf/${cpf}`);
  }


}
