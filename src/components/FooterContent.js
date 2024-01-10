import React from "react";
import useTranslate from "../hooks/useTranslate";

const FooterContent = ({ toggleDarkMode, isDarkMode }) => {
  const t = useTranslate();
  const light = t("라이트");
  const dark = t("다크");
  return (
    <footer>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? light : dark}
        {t("switch text")}
      </button>
    </footer>
  );
};

export default FooterContent;
