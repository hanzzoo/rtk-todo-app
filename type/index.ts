import { RefObject } from "react";

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

export type InputFormProps<T> = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  CurrentRef?: RefObject<T> | null;
  textContent: string;
};

export type ButtonProps<T> = Pick<
  InputFormProps<T>,
  "CurrentRef" | "textContent"
>;
