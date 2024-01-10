import React, { useState, useReducer } from "react";
import Todo from "./components/Todo";
import HeaderContent from "./components/HeaderContent";
import styled, { createGlobalStyle } from "styled-components";
import LocaleSelect from "./LocaleSelect";
import { LocaleProvider } from "./contexts/LocaleContext";
import FooterContent from "./components/FooterContent";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${(props) => (props.isDarkMode ? "#333" : "#fff")};
    color: ${(props) => (props.isDarkMode ? "#fff" : "#333")};
    transition: background 0.3s, color 0.3s;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  margin: 24px 20%;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  align-content: center;
`;

const reducer = (state, action) => {
  console.log("state, action 을 출력합니다.", state, action);
  switch (action.type) {
    case "add-todo":
      const name = action.payload.name;
      const newTodo = {
        id: Date.now(),
        name,
        completed: false,
      };
      return {
        count: state.count + 1,
        todos: [...state.todos, newTodo],
      };
    case "delete-todo":
      return {
        count: state.count - 1,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case "mark-todo":
      return {
        count: state.count,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

const initialList = {
  count: 0,
  todos: [],
};

function App() {
  const [name, setname] = useState("");
  const [todosInfo, dispatch] = useReducer(reducer, initialList);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <LocaleProvider defaultValue={"ko"}>
      <>
        <LocaleSelect />
        <GlobalStyle isDarkMode={isDarkMode} />
        <HeaderContainer>
          <HeaderContent
            name={name}
            setname={setname}
            todosInfo={todosInfo}
            dispatch={dispatch}
          />
        </HeaderContainer>
        <FlexContainer>
          {todosInfo.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                name={todo.name}
                dispatch={dispatch}
                id={todo.id}
                completed={todo.completed}
              />
            );
          })}
        </FlexContainer>
        <FooterContent
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
      </>
    </LocaleProvider>
  );
}

export default App;
