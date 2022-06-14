import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../type";
import { RootState } from "../../app/store";
import { fetchTodoThunk, onPostTodoThunk } from "../../pages/hook/fetchTodoApi";

const initialState = {
  isLoading: false,
  isError: false,
  isPosting: false,
  todoItems: [],
  query: {},
} as InitialState;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodoThunk.pending, (state) => {
      state.isLoading = true;
      state.todoItems = [];
      state.isError = false;
    });
    builder.addCase(fetchTodoThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.todoItems = payload?.data;
      state.isError = false;
    });
    builder.addCase(fetchTodoThunk.rejected, (state) => {
      state.isLoading = false;
      state.todoItems = [];
      state.isError = true;
    });
    builder.addCase(onPostTodoThunk.pending, (state) => {
      state.isPosting = true;
      state.isError = false;
    });
    builder.addCase(onPostTodoThunk.fulfilled, (state, { payload }) => {
      state.isPosting = false;
      state.todoItems = [...state.todoItems, payload];
      state.isError = false;
    });
    builder.addCase(onPostTodoThunk.rejected, (state) => {
      state.isPosting = false;
      state.isError = false;
    });
  },
});

export default todoSlice.reducer;

export const isLoadingSelector = (state: Pick<InitialState, "isLoading">) => state.isLoading;
export const todoItemSelector = (state: RootState) => state.todoItems;
export const isErrorSelector = (state: Pick<InitialState, "isError">) => state.isError;
export const isPostingSelector = (state: Pick<InitialState, "isPosting">) => state.isPosting;
