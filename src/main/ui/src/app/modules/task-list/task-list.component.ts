import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {takeUntil} from "rxjs/operators";
import {AppService} from "../../app.service";
import {Subject} from "rxjs";
import {TodoItem} from "../../model/TodoItem";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() todoItems: any[];

  public addItem = new FormControl('');
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  addTodoItem() {
    let item = {
      task: this.addItem.value,
      completed: false
    }
    this.appService.addTodoItem(item).pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.addItem.reset();
      this.todoItems.push(data);
    });
  }

  markAsCompleted(todoItem: TodoItem) {
    console.log(todoItem)
    todoItem.completed = !todoItem.completed;
    this.appService.addTodoItem(todoItem).pipe(takeUntil(this.destroy$)).subscribe(data => {
    });
  }

}
