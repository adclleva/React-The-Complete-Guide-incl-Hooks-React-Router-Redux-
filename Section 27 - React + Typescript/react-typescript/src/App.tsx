import { useState } from "react";
import NewToDo from "./components/NewToDo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // to set what kind of data the todos would be
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodohandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  return (
    <div>
      <NewToDo onAddTodo={addTodohandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
