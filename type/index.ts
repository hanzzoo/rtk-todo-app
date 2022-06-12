export interface TodoItems {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface InitialState {
  todoItems: TodoItems[];
}
