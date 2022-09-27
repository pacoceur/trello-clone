import 'styled-components'

export type ScreenSize = 'small' | 'medium' | 'large'

declare module 'styled-components' {
    export interface DefaultTheme {
      borderRadius: {
        normal: string
      }
  
      colors: {
        brand: {
          primary: string
          secondary: string
        }
        neutral: {
          black: string
          white: string
        }
        grey: {
          light: string
          medium: string
          dark: string
        }
      }
  
      boxShadow: {
        normal: string
      }
  
      spacing: (_s: number) => string
  
      fontSizes: {
        small: string
        medium: string
        large: string
      }
    }
  }
  