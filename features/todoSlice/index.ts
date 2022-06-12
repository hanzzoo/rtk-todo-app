import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../../type";
import { RootState } from "../../app/store";
import { fetchTodoThunk } from "../../pages/hook/fetchTodoApi";

const initialState = {
  todoItems: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodoThunk.pending, (state, action: PayloadAction) => {
      //console.log(state, action)
    });
    builder.addCase(fetchTodoThunk.fulfilled, (state, action) => {
      //console.log(state, action)
      state.todoItems = action.payload?.data;
    });
    builder.addCase(fetchTodoThunk.rejected, (state, action) => {
      //console.log(state, action)
    });
  },
});

export default todoSlice.reducer;

export const todoItemSelector = (state: RootState) => state.todoItems;
