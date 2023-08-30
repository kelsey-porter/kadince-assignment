import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';
  todos: any[] = [];

  constructor(private appService: AppService) {
  }

  getAllUsers() {
    this.appService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
