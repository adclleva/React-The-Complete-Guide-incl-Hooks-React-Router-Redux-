import React, { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

// const NewTodo: React.FC<{ onAddTodo: (todoText: string) => void }> = (props) => {

const NewTodo: React.FC = () => {
  const todosContext = useContext(TodosContext);

  // needs to explicitly define the ref
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //  the ! tells TS that we are sure that it won't be null
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }

    todosContext.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
