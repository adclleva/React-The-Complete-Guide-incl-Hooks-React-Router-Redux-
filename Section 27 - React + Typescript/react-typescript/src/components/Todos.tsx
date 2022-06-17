import React, { useContext } from "react";

// import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

// type Props = {
//   items?: Todo[];
//   children?: React.ReactNode;
//   onRemoveTodo: (todoId: string) => void;
// };

// this type notation indicates that this function is a functional component type
// React.FC is a generic type and we are using this React.FC feature to set the prop types with <{}>
// const Todos = (props: Props) => {

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosContext.items?.map((item) => {
        const { id, text } = item;

        // keep in mind that this will create a re-render
        //this is equivalent => onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        return <TodoItem key={id} text={text} onRemoveTodo={() => todosContext.removeTodo(item.id)} />;
      })}
    </ul>
  );
};

export default Todos;
