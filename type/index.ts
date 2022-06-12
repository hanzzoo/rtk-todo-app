export interface TodoItems {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
type Query = Omit<TodoItems, "id">;
export interface InitialState {
  todoItems: TodoItems[];
  query: keyof Query | object;
}
