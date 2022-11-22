import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: "Roboto", sans-serif;
  overflow-y: hidden;
}

#root {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  user-select: none;
}

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(180, 180, 180, 0.7);
  border-radius: 20px;
}
`;
