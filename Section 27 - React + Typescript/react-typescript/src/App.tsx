import { useState } from "react";
import NewToDo from "./components/NewToDo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const addTodohandler = (todoText: string) => {};

  return (
    <div>
      <NewToDo onAddTodo={addTodohandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
