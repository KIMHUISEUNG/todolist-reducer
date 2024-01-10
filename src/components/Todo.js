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

const Button = styled.button`
  background-color: #fff;
  font-size: 1em;
  padding: 0.25em 0.25em;
  border: 2px solid #00a62c;
  border-radius: 3px;
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
      <Button
        onClick={() => {
          dispatch({ type: "delete-todo", payload: { id } });
        }}
      >
        {t("delete button")}
      </Button>
    </TodoItem>
  );
};

export default Todo;
