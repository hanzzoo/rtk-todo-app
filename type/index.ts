export interface TodoItems {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
export type PostItem = Partial<Omit<TodoItems, "id">>;
export interface InitialState {
  todoItems: TodoItems[];
  query: PostItem;
}
