import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Method = "GET";
const API_ROOT_URL = "https://jsonplaceholder.typicode.com/todos";
const PARAMS = "?userId=1";

const fetchTodoApi = async () => {
  try {
    const data = await axios.get(`${API_ROOT_URL}${PARAMS}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTodoThunk = createAsyncThunk("fetch/todo", async () => {
  try {
    const data = await fetchTodoApi();
    return data;
  } catch (error) {
    console.error(error);
  }
});
