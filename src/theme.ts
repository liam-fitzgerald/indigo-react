import baseStyled, { ThemedStyledInterface } from 'styled-components';

// DEV PURPOSES ONLY
const theme = {
  // color, background-color, border-color
  colors: {
    util: '#FFFF00',
    black: '#000000',
    nearBlack: '#111111',
    darkGray: '#333333',
    midGray: '#555555',
    gray: '#777777',
    silver: '#999999',
    lightSilver: '#AAAAAA',
    moonGray: '#CCCCCC',
    lightGray: '#EEEEEE',
    nearWhite: '#F4F4F4',
    white: '#FFFFFF',
    darkRed: '#E7040F',
    red: '#FF4136',
    lightRed: '#FF725C',
    washedRed: '#FFDFDF',
    orange: '#FF6300',
    gold: '#FFB700',
    yellow: '#FFD700',
    lightYellow: '#FBF1A9',
    washedYellow: '#FFFCEB',
    purple: '#5E2CA5',
    lightPurple: '#A463F2',
    darkPink: '#D5008F',
    hotPink: '#FF41B4',
    pink: '#FF80CC',
    lightPink: '#FFA3D7',
    darkGreen: '#137752',
    green: '#19A974',
    lightGreen: '#9EEBCF',
    washedGreen: '#E8FDF5',
    navy: '#001B44',
    darkBlue: '#00449E',
    blue: '#357EDD',
    lightBlue: '#96CCFF',
    lightestBLue: '#CDECFF',
    washedBlue: '#F6FFFE',

    // black: '#000000',
    // grayDarkest: '#2B2B2B',
    // grayDark: '#555555',
    // gray: '#7f7f7f',
    // grayMid: '#B1B1B1',
    // grayLight: '#D5D5D5',
    // grayLightest: '#EAEAEA',
    // white: '#ffffff',
    // blue: '#357EDD',
    // blueLight: '#ecf6ff',
    // blueDark: '#190d7b',
    // redLight: '#f9d6ce',
    // red: '#FF4136',
    // redDark: '#E7040F',
    // greenLight: '#bdebcc',
    // green: '#19A974',
    // greenDark: '#286e55',
    // yellowLight: '#ffefc5',
    // yellow: '#fcc440',
    // yellowDark: '#ee892b',
  },
  // font-family
  fonts: {
    sans: `"Inter", "Inter UI", -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Arial, sans-serif`,
    mono: `"Source Code Pro", "Roboto mono", "Courier New", monospace`,
  },
  // font-size
  fontSizes: [
    10, // 0
    11, // 1
    12, // 2
    14, // 3
    16, // 4
    20, // 5
    24, // 6
    32, // 7
    48, // 8
  ],
  // 	font-weight
  fontWeights: {
    thin: 300,
    regular: 400,
    bold: 500,
  },
  // line-height
  lineHeights: {
    short: 1.333334,
    regular: 1.5,
    tall: 1.666667,
  },
  // border, border-top, border-right, border-bottom, border-left
  borders: ['none', '1px solid'],
  // margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
  space: [
    0, // 0
    4, // 1
    8, // 2
    12, // 3
    16, // 4
    20, // 5
    24, // 6
    32, // 7
    48, // 8
    64, // 9
    96, // 10
    160, // 11
    288, // 12
  ],
  // border-radius
  radii: [
    0, // 0
    4, // 1
    8, // 2
    12, // 3
    16, // 4
    20, // 5
    24, // 6
    32, // 7
  ],
  // width, height, min-width, max-width, min-height, max-height
  sizes: [
    0, // 0
    4, // 1
    8, // 2
    12, // 3
    16, // 4
    20, // 5
    24, // 6
    32, // 7
    48, // 8
    64, // 9
    96, // 10
    160, // 11
    288, // 12
    448, // 13
    736, // 14
  ],
  // z-index
  zIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  breakpoints: ['768px', '1024px', '1440px'],
  cssReset: `
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
      font-weight: normal;
    }
    body {
      line-height: 1.5;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  `,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
