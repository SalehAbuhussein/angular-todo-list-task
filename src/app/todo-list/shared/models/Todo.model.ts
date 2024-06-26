export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export type AddTodo = Omit<Todo, 'id'>;
export type EditTodo = AddTodo;
