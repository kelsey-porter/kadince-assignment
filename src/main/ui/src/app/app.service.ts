import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getTodoItems() {
    return this.http.get(this.rootURL + '/todoItems');
  }

  addTodoItem(todoItem: any) {
	return this.http.post(this.rootURL + '/todoItem', todoItem);
  }

  updateTodoItem(todoItem: any) {
    return this.http.post(this.rootURL + '/update', todoItem);

  }

}
