import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type Props = {
  items?: Todo[];
  children?: React.ReactNode;
};

// this type notation indicates that this function is a functional component type
// React.FC is a generic type and we are using this React.FC feature to set the prop types with <{}>
const Todos = (props: Props) => {
  return (
    <ul>
      {props.items?.map((item) => {
        const { id, text } = item;
        return <TodoItem key={id} text={text} />;
      })}
    </ul>
  );
};

export default Todos;
