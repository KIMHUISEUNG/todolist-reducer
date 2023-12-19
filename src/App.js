import React, { useState, useReducer } from "react";
import Todo from "./components/Todo";

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

  return (
    <div>
      <h1>Todo List</h1>
      <p>해야할 일 수 : {todosInfo.count}</p>
      <input
        type="text"
        placeholder="작업을 입력해주세요"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-todo", payload: { name } });
        }}
      >
        추가
      </button>
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
    </div>
  );
}

export default App;
