import * as rg6Theme from './rg6-theme'
import * as darkTheme from './dark-theme'

const space = [0, 4, 8, 16, 32].map(value => `${value}px`)
space.s =  space[1]
space.m =  space[2]
space.l =  space[3]
space.xl = space[4]

const lineHeights = [0.25, 1, 1.25, 1.75]
lineHeights.heading = lineHeights[2]
lineHeights.body =    lineHeights[3]

const base = {
  space,
  radii: [0, 4],
  fonts:            {
    body:      'sans-serif',
    monospace: 'monospace',
  },
  fontSizes:   [12, 14, 16, 18, 24, 32, 48, 64, 72],
  lineHeights,
  shadows: {
    m: '0 4px 16px rgba(0,0,0,.175)'
  }
}

export const rg6 = { ...base, ...rg6Theme }
export const dark = { ...base, ...darkTheme }
