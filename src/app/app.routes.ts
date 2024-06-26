import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-list/todo-create/todo-create.component';
import { TodoEditComponent } from './todo-list/todo-edit/todo-edit.component';

export const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListComponent,
  },
  {
    path: 'todo-list/create',
    component: TodoCreateComponent,
  },
  {
    path: 'todo-list/edit/:id',
    component: TodoEditComponent  
  }
];
