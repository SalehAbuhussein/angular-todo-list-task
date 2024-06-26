import { Component, ViewChild, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoListDataService } from '../shared/services/todo-list-data.service';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.scss',
})
export class TodoCreateComponent {
  todoListDataService = inject(TodoListDataService);
  formBuilder = inject(FormBuilder);

  createTodoForm = this.formBuilder.nonNullable.group({
    title: ['', Validators.required],
    isCompleted: [false],
  });

  onSubmit() {
    this.todoListDataService.addTodo(this.createTodoForm.getRawValue());
    this.createTodoForm.reset();
  }
}
