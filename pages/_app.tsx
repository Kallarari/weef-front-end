import '../styles/globals.ts'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import { ThemeProvider } from '@mui/material'
import { LightTheme } from '../styles/LightTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
