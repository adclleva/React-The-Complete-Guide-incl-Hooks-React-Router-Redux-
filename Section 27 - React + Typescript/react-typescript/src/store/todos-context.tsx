import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void; // this is a function type definition
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {}, // these are concrete type definition
  removeTodo: (id: string) => {},
});

// this will be managing the context state

type TodosContextProviderProps = {
  children: React.ReactNode;
};

const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => {
  // to set what kind of data the todos would be
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodohandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodohandler,
    removeTodo: removeTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
