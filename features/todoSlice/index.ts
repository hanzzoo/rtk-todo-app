import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../../type";
import { RootState } from "../../app/store";
import { fetchTodoThunk, onPostTodoThunk } from "../../pages/hook/fetchTodoApi";

const initialState = {
  todoItems: [],
  query: {},
} as InitialState;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodoThunk.pending, (state, action: PayloadAction) => {
      //console.log(state, action)
    });
    builder.addCase(fetchTodoThunk.fulfilled, (state, action) => {
      state.todoItems = action.payload?.data;
    });
    builder.addCase(fetchTodoThunk.rejected, (state, action) => {
      //console.log(state, action)
    });
    builder.addCase(onPostTodoThunk.fulfilled, (state, action) => {
      state.todoItems = [...state.todoItems, action.payload];
      console.log(state.todoItems);
    });
  },
});

export default todoSlice.reducer;

export const todoItemSelector = (state: RootState) => state.todoItems;
