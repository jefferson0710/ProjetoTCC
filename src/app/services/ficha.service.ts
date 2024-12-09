import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class FichaService {
  private apiUrl = 'http://localhost:3333/fichas'; // URL da sua API AdonisJS

  constructor(private http: HttpClient) { }

  // Listar todas as fichas
  getFichas(): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
  }

  // Criar uma nova ficha
  createFicha(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data)
  }

  // Visualizar uma ficha específica
  getFicha(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  // Atualizar uma ficha específica
  updateFicha(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data)
  }

  // Excluir uma ficha específica
  deleteFicha(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
