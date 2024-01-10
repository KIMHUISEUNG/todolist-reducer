import React from "react";
import useTranslate from "../hooks/useTranslate";
import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  font-size: 1em;
  margin: 1em 0em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.colors.g3};
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => props.theme.colors.g1};
  }
`;

const HeaderContent = ({
  textTodo,
  setTextTodo,
  todosInfo,
  dispatch,
  theme,
}) => {
  const t = useTranslate();
  return (
    <>
      <h1>Todo List</h1>
      <p>
        {t("sub title")} : {todosInfo.count}
      </p>

      <input
        type="text"
        placeholder="작업을 입력해주세요"
        value={textTodo}
        onChange={(e) => setTextTodo(e.target.value)}
      />
      <Button
        theme={theme}
        onClick={() => {
          dispatch({ type: "add-todo", payload: { textTodo } });
        }}
      >
        추가
      </Button>
    </>
  );
};

export default HeaderContent;
