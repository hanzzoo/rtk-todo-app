import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { fetchTodoThunk, onPostTodoThunk } from "./hook/fetchTodoApi";
import { todoItemSelector } from "../features/todoSlice";

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { todoItems } = useSelector(todoItemSelector);
  const inputElementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(fetchTodoThunk());
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let inputValue;
    if (inputElementRef.current !== null && inputElementRef.current.value !== "" ) {
      inputValue = inputElementRef.current.value;
      dispatch(onPostTodoThunk(inputValue));
      inputValue = "";
    }
    return false;
  };

  console.log(todoItems);
  return (
    <div>
      <form action="post" onSubmit={handleSubmit}>
        <input ref={inputElementRef} type="text" />
        <button>登録</button>
      </form>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
