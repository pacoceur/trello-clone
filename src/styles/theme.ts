import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: {
    normal: "3px",
  },

  colors: {
    brand: {
      primary: "#087cbc",
      secondary: "#0864a4",
    },
    neutral: {
      black: "#000000",
      white: "#ffffff",
    },
    grey: {
      light: "#ebecf0",
      medium: "#5e6c84",
      dark: "#3f516c",
    },
  },

  boxShadow: {
    normal: "0px 1.5px 0px 0px rgba(100,100,100,0.25)",
  },

  spacing: (s: number) => `${s * 8}px`,

  fontSizes: {
    small: "14px",
    medium: "18px",
    large: "22px",
  },
};

export default theme;
