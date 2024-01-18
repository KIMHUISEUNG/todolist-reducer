import React from "react";
import useTranslate from "../hooks/useTranslate";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.g3};
  font-family: "Dongle", sans-serif;
  font-size: 2em;
  padding: 0em 0.25em;
  border: 2px solid ${(props) => props.theme.colors.g4};
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => props.theme.colors.g2};
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
const InputBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.75em 1em;
`;
const InputToDo = styled.input`
  padding: 1em;
  width: 25em;
`;

const HeaderContent = ({
  textTodo,
  setTextTodo,
  todosInfo,
  dispatch,
  theme,
}) => {
  //react-hook-form 라이브러리에서 제공하는 hook들을 선언
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //button이 발생시킨 submit이벤트 처리
  const onSubmit = (data) => {
    dispatch({ type: "add-todo", payload: { textTodo } });
  };
  const t = useTranslate();
  return (
    <>
      <Title theme={theme}>Todo List</Title>
      <Count theme={theme}>
        {t("sub title")} : {todosInfo.count}
      </Count>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBoxContainer>
          <InputToDo
            type="text"
            placeholder="작업을 입력해주세요"
            value={textTodo}
            {...register("todoData", {
              onChange: (e) => setTextTodo(e.target.value),
              required: true,
              minLength: 2,
              maxLength: 50,
              pattern: /^[A-Za-zㄱ-ㅎ가-힣]+$/i,
            })}
          />

          <Button type="submit" theme={theme}>
            +
          </Button>
          {errors.todoData?.type === "minLength" && (
            <p>2글자 이상 입력해주세요</p>
          )}
          {errors.todoData?.type === "maxLength" && (
            <p>50자 이내로 입력해주세요</p>
          )}
        </InputBoxContainer>
      </form>
    </>
  );
};

export default HeaderContent;
