import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListDataService } from './shared/services/todo-list-data.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, RouterLink, RouterOutlet],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todoListDataService = inject(TodoListDataService);

  onItemDelete(id: number) {
    this.todoListDataService.deleteTodo(id);
  }
}
