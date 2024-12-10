import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'https://ultimavezpt2-2.onrender.com/fichas';

  constructor(private http: HttpClient) { }

  buscarPorCpf(cpf: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cpf}`);
  }

  atualizarPaciente(id: number, paciente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, paciente);
  }
}
