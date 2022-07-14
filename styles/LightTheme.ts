import { createTheme } from '@mui/material'

export const LightTheme = createTheme({
  palette: {
    error: {
      main: '#ef5350'
    },
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: 'white'
    },
    secondary: {
      main: '#ffea00',
      light: '#ffee33',
      dark: '#b2a300',
      contrastText: 'white'
    },
    background: {
      default: '#fff',
      paper: 'white'
    }
  }
})
