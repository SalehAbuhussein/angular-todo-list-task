import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoListDataService } from '../shared/services/todo-list-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss'
})
export class TodoEditComponent implements OnInit {
  todoListDataService = inject(TodoListDataService);
  activatedRoute = inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);

  editTodoForm = this.formBuilder.nonNullable.group({
    title: ['', Validators.required],
    isCompleted: [false],
  });

  ngOnInit(): void {
    const { id, ...item } = this.todoListDataService.getItem(+this.activatedRoute.snapshot.params['id'])!;
    
    this.editTodoForm.setValue(item);  
  }

  onSubmit() {
    this.todoListDataService.editTodo(+this.activatedRoute.snapshot.params['id'], this.editTodoForm.getRawValue());
    this.editTodoForm.reset();
  }
}
