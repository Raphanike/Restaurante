import { createGlobalStyle } from 'styled-components'

export const Cores = {
  salmao: '#E66767',
  branco: '#FFFFFF',
  salmaoClaro: '#FFEBD9',
  fundo: '#fff7f0',
  black: '#4B4B4B'
}

export const Breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box ;
  list-style: none;
  font-family: Roboto , sans-serif;
  text-decoration: none;
}
`
