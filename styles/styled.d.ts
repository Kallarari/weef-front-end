/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components'

import theme from './LightTheme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}