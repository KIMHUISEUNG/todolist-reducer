import React from "react";
import styled from "styled-components";
import useTranslate from "../hooks/useTranslate";

const TodoItem = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  margin: 4px;
`;

const TodoText = styled.span`
  padding: 12px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props) =>
    props.isDarkMode ? "#fff" : props.completed ? "gray" : "#333"};
`;

const Todo = ({ textTodo, dispatch, id, completed, isDarkMode }) => {
  const t = useTranslate();
  console.log("isDarkMode", isDarkMode);
  return (
    <TodoItem>
      <TodoText
        isDarkMode={isDarkMode}
        completed={completed}
        onClick={() => {
          dispatch({ type: "mark-todo", payload: { id } });
        }}
      >
        {textTodo}
      </TodoText>
      <button
        onClick={() => {
          dispatch({ type: "delete-todo", payload: { id } });
        }}
      >
        {t("delete button")}
      </button>
    </TodoItem>
  );
};

export default Todo;
