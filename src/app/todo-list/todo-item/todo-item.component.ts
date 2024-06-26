import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Todo } from '../shared/models/Todo.model';
import { TodoListDataService } from '../shared/services/todo-list-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Output() itemDeleted = new EventEmitter<number>();
  @Input({ required: true }) item!: Todo;

  todoListDataService = inject(TodoListDataService);

  toggleCompleteStatus(itemId: number) {
    this.todoListDataService.editTodo(itemId, { title: this.item.title, isCompleted: !this.item.isCompleted})
  }
}
