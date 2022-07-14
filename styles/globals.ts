import { createGlobalStyle } from 'styled-components'
import { LightTheme } from './LightTheme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${LightTheme.palette.background.default};
    color: ${LightTheme.palette.primary.main};
    font: 400 16px Roboto, sans-serif;
  }

  a {
    color: ${LightTheme.palette.background.default};
    text-decoration: none;
  }
`
