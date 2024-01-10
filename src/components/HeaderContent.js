import React from "react";
import useTranslate from "../hooks/useTranslate";

const HeaderContent = ({ name, setname, todosInfo, dispatch }) => {
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
    </>
  );
};

export default HeaderContent;
