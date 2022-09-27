import { ScreenSize } from './styled'

const size: Record<ScreenSize, string> = {
  small: '576px',
  medium: '768px',
  large: '1200px',
}

export const breakpoints: Record<ScreenSize, string> = {
  small: `@media (min-width: ${size.small})`,
  medium: `@media (min-width: ${size.medium})`,
  large: `@media (min-width: ${size.large})`,
}
