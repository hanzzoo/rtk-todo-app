import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { fetchTodoThunk, onPostTodoThunk } from "./hook/fetchTodoApi";
import { todoItemSelector } from "../features/todoSlice";
import { InputForm } from "../pages/components/molecules/InputForm";

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { todoItems } = useSelector(todoItemSelector);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(fetchTodoThunk());
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current !== null && inputRef.current.value !== "") {
      dispatch(onPostTodoThunk(inputRef.current.value)).then(() => {
        return inputRef.current?.value.trim() && (inputRef.current.value = "");
      });
    }
    return false;
  };

  return (
    <div>
      <InputForm
        onSubmit={handleSubmit}
        CurrentRef={inputRef}
        textContent={"登録"}
      />
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
