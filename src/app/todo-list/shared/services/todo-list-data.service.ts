import { Injectable } from '@angular/core';
import { AddTodo, EditTodo, Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListDataService {
  todoListItems: Todo[] = [];

  constructor() {}

  addTodo(item: AddTodo) {
    const simulatedId = Math.floor(Math.random() * (10000 - 1 + 1) + 1);

    this.todoListItems = [...this.todoListItems, { ...item, id: simulatedId }];
  }

  editTodo(id: number, updatedItemData: EditTodo) {
    this.todoListItems = this.todoListItems.map((item) =>
      item.id === id ? { ...item, ...updatedItemData } : item
    );
  }

  deleteTodo(id: number) {
    this.todoListItems = this.todoListItems.filter(
      (element) => element.id != id
    );
  }

  getItem(id: number) {
    return this.todoListItems.find(item => item.id === id)
  }
}
