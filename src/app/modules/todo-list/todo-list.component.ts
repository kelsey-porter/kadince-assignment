import {Component, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {FormControl} from "@angular/forms";
import {TodoItem} from "../../model/TodoItem";
import {Filter} from "../../model/Filter";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  filters: Filter[] = [
    {name: 'Completed', completed: false},
    {name: 'Pending', completed: false},
  ];

  currentTodoBeingEdited?: TodoItem;


  public addItem = new FormControl('');
  public editItem = new FormControl('');

  todoItems: TodoItem[] = [];
  isFilterShown = false;
  allComplete = false;

  constructor(public appService: AppService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.appService.getTodos()
      .subscribe(list => {
          this.todoItems = list;
        }
      )
  }

  filterList() {
    this.appService.getFilteredTodos(this.filters)
      .subscribe(list => {
        console.log(list)
        this.todoItems = list;
      })
  }

  selectAll(completed: boolean) {
    this.allComplete = !this.allComplete;
    this.filters.forEach(filter => filter.completed = completed);
    this.filterList();
  }

  someComplete(): boolean {
    return this.filters.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  updateAllComplete(filter: Filter) {
    filter.completed = !filter.completed;
    this.allComplete = this.filters.every(t => t.completed);
    this.filterList();
  }

  handleKeyPress(event: any) {
    if (event.key === 'Enter') {
      this.addTodoItem();
    }
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
    todoItem.completed = !todoItem.completed;
    this.appService.addTodoItem(todoItem).pipe().subscribe(data => {
    });
  }

  toggleFilter() {
    this.isFilterShown = !this.isFilterShown;
  }

  delete(todoItem: TodoItem) {
    this.todoItems.find(x => x.id == todoItem.id);
    this.todoItems = this.todoItems.slice(0, this.todoItems.findIndex(x => x.id == todoItem.id));
    console.log(this.todoItems)

    this.appService.delete(todoItem).subscribe(list => {
      this.todoItems = list;
    });
  }

  isButtonVisible(todo: TodoItem) {
    if (this.currentTodoBeingEdited == todo) {
      return true;
    } else {
      return false;
    }
  }

  submitEdit(todo: TodoItem) {
    let newItem = todo;
    console.log(newItem);
    newItem.task = <string>this.editItem.value;
    this.appService.update(newItem).subscribe(todo => {
        this.currentTodoBeingEdited = undefined;
      }
    );
  }

  cancelTodo() {
    this.currentTodoBeingEdited = undefined;
  }

  editTodo(todo: any) {
    this.currentTodoBeingEdited = todo;
    this.editItem.setValue(todo.task);

  }
}
