import React from "react";
import useTranslate from "../hooks/useTranslate";
import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.colors.g3};
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => props.theme.colors.g1};
  }
`;

const ThemeModeButton = ({ toggleDarkMode, isDarkMode, theme }) => {
  const t = useTranslate();
  const light = t("light button");
  const dark = t("dark button");
  return (
    <footer>
      <Button theme={theme} onClick={toggleDarkMode}>
        {isDarkMode ? light : dark} {t("switch text")}
      </Button>
    </footer>
  );
};

export default ThemeModeButton;
