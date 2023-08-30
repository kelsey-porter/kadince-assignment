import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./modules/todo-list/todo-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'todoItems', pathMatch: "full"},
  { path: 'todoItems', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
