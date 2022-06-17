import React, { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewToDo: React.FC<{ onAddTodo: (todoText: string) => void }> = (props) => {
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

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewToDo;
