import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body{
    overflow-x: hidden;
    overflow-y:visible;
  }
`

export default GlobalStyle
