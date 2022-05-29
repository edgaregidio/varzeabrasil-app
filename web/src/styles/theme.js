import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    50: '#009c3b',
    100: '#00792e',
    200: '#009c3b',
    300: '#888888',
    400: '#f9f9f9',
    500: '#e6e6e6',
    600: '#06aa48',
    700: '#222'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({ colors, config })
