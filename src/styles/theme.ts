import React from "react";
import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: {
    normal: "3px",
  },

  colors: {
    brand: {
      primary: '#087cbc',
      secondary: '#0864a4',
    },
    neutral: {
      black: '#000000',
      white: '#ffffff',
    },
    grey: {
      light: '#ebecf0',
      medium: '#5e6c84',
      dark: '#3f516c',
    },
  },

  boxShadow: {
    normal: '0px 0px 60px rgba(0, 0, 0, 0.15)',
  },

  spacing: (s: number) => `${s * 8}px`,

  fontSizes: {
    small: "1rem",
    medium: "2em",
    large: "3em",
  },
};

export default theme;
