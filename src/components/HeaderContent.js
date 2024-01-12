import React from "react";
import useTranslate from "../hooks/useTranslate";
import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  font-family: "Dongle", sans-serif;
  font-size: 1em;
  margin: 1em 0em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.colors.g3};
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => props.theme.colors.g1};
  }
`;
const Title = styled.h1`
  font-size: 5em;
  font-weight: ${(props) => props.theme.weight.blod};
  margin: 0.25em 1em;
`;
const Count = styled.p`
  font-size: ${(props) => props.theme.emSize.em3};
  font-weight: ${(props) => props.theme.weight.regular};
  margin: ${(props) => props.theme.emSize.em1};
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
      <Title theme={theme}>Todo List</Title>
      <Count theme={theme}>
        {t("sub title")} : {todosInfo.count}
      </Count>

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
