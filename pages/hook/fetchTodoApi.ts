import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_ROOT_URL = "https://jsonplaceholder.typicode.com";
const USER_QUERY = "?userId=1";

const fetchTodoApi = async () => {
  try {
    const getData = await axios.get(`${API_ROOT_URL}/todos${USER_QUERY}`);
    return getData;
  } catch (error) {
    console.log(error);
  }
};

const onPostAPI = async (query: string) => {
  try {
    const postItem = await axios.post(`${API_ROOT_URL}/posts`, {
      title: query,
      userId: 1,
    });
    return postItem.data;
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

export const onPostTodoThunk = createAsyncThunk(
  "post/todo",
  async (query: string) => {
    try {
      const postData = await onPostAPI(query);
      return postData;
    } catch (error) {
      console.log(error);
    }
  }
);
