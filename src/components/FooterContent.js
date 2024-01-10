import React from "react";
import useTranslate from "../hooks/useTranslate";

const FooterContent = ({ toggleDarkMode, isDarkMode }) => {
  const t = useTranslate();
  const light = t("light button");
  const dark = t("dark button");
  return (
    <footer>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? light : dark} {t("switch text")}
      </button>
    </footer>
  );
};

export default FooterContent;
