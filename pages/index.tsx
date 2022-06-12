import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppDispatch, useAppSelector } from "../app/store";
import { fetchTodoThunk } from "./hook/fetchTodoApi";
import { todoItemSelector } from "../features/todoSlice";

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const todoItems = useSelector(todoItemSelector);

  useEffect(() => {
    dispatch(fetchTodoThunk());
  }, []);

  console.log(todoItems);
  return <div></div>;
};

export default Home;
