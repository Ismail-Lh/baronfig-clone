import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: sans-serif;
  background-color: ${({ theme }) => theme.white};
  width: 100vw;
  height: 100vh;
  font-weight: 400;
  overflow-x: hidden;
}

a,
button
{
  cursor: pointer;
}

input,
textarea,
svg {
  outline: none;
  border: none;
}

a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
}

ul {
  list-style: none;
}

button {
  background: transparent;
  border: 0;
}

.container{
  @media (max-width: 1440px){
    padding:0 3.2rem;
  }

  @media (max-width: 428px){
    padding: 0 2.5rem;
  }
}
`;

export default GlobalStyles;
