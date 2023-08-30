import {Component, OnInit} from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  constructor(public appService: AppService) {
  }

  ngOnInit() {
    this.appService.getTodos()
      .subscribe(list => {
        console.log(list);
      }

    )
  }
}
