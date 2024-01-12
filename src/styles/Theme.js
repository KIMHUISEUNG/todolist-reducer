import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Dongle', sans-serif;
    margin: 0;
    background: ${(props) =>
      props.isDarkMode
        ? props.theme.colors.dark_text
        : props.theme.colors.white_text};
    color: ${(props) =>
      props.isDarkMode
        ? props.theme.colors.white_text
        : props.theme.colors.dark_text};
    transition: background 0.3s, color 0.3s;
  }
`;

export const theme = {
  colors: {
    g4: "#373F51",
    g3: "#58A4B0",
    g2: "#A9BCD0",
    g1: "#D8DBE2",
    dark_text: "#333",
    white_text: "#fff",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  emSize: {
    em1: "0.5em",
    em2: "1em",
    em3: "1.25em",
    em4: "2em",
    em5: "5em",
  },
  weight: {
    light: "300",
    regular: "400",
    bold: "700",
  },
};
