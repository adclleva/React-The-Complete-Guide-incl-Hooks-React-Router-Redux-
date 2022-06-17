import React from "react";

type Props = {
  items?: string[];
  children?: React.ReactNode;
};

// this type notation indicates that this function is a functional component type
// React.FC is a generic type and we are using this React.FC feature to set the prop types with <{}>
const Todos = (props: Props) => {
  return (
    <ul>
      {props.items?.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default Todos;
