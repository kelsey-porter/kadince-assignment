import {Component, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {FormControl} from "@angular/forms";
import {TodoItem} from "../../model/TodoItem";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  public addItem = new FormControl('');
  todoItems: TodoItem[] = [];

  constructor(public appService: AppService) {
  }

  ngOnInit() {
    this.appService.getTodos()
      .subscribe(list => {
        console.log(list);
      }

    )
  }

  addTodoItem() {
    let item = {
      task: this.addItem.value,
      completed: false
    }
    this.appService.addTodoItem(item).subscribe(data => {
      this.addItem.reset();
      this.todoItems.push(data);
    });
  }

  markAsCompleted(todoItem: TodoItem) {
    console.log(todoItem)
    todoItem.completed = !todoItem.completed;
    this.appService.addTodoItem(todoItem).pipe().subscribe(data => {
    });
  }
}
