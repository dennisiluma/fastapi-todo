import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:8085'


  getAllTodos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/todos`).pipe(map(res => res.data));
  }

  getTodoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/todos/${id}`).pipe(map(res => res.data));
  }

  createTodo(title: string, description: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/todos`, { title, description }).pipe(map(res => res.data));
  }

  updateTodo(id: number, title: string, description: string, is_completed: boolean): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/todos/update/${id}`, { title, description, is_completed }).pipe(map(res => res.data));
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/todos/delete/${id}`).pipe(map(res => res.data));
  }
}
