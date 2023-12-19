import React from "react";

const Todo = ({ name, dispatch, id, completed }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "gray" : "black",
        }}
        onClick={() => {
          dispatch({ type: "mark-todo", payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: "delete-todo", payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Todo;
