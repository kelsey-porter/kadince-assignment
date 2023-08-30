import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TodoItem} from "./model/TodoItem";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getTodos() {
    return this.http.get<TodoItem[]>(this.baseUrl);
  }

  addTodoItem(todoItem: any) {
    return this.http.post<TodoItem>(this.baseUrl + '/todoItem', todoItem);
  }

  updateTodoItem(todoItem: any) {
    return this.http.post(this.baseUrl + '/update', todoItem);

  }

}
