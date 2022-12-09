import { globalCss, lightTheme, styled, theme } from '../stitches.config';

export const ProviderStyled = styled('div', {
  background: '$background',
  color: '$text',
  minHeight: '100vh',
  position: 'relative',
});

export const reset = globalCss({
  '@import': 'url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap")',
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  '*': {
    MozOsxFontSmoothing: 'grayscale',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    boxSizing: 'inherit',
    letterSpacing: 'normal',
    marginBlockEnd: 0,
    marginBlockStart: 0,
    marginInlineEnd: 0,
    marginInlineStart: 0,
    outline: 'none',
    paddingBlockEnd: 0,
    paddingBlockStart: 0,
    paddingInlineEnd: 0,
    paddingInlineStart: 0,
    wordSpacing: 'normal',
  },
  '*:after': {
    boxSizing: 'inherit',
  },
  '*:before': {
    boxSizing: 'inherit',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  body: {
    backgroundColor: 'inherit',
    border: 0,
    color: '$text',
    fontFamily: '$default',
    fontSize: '1.6rem',
    margin: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: 0,

    [`.${theme}`]: {
      background: '$background',
      color: '$text',
    },
    [`.${lightTheme}`]: {
      background: '$background',
      color: '$text',
    },
  },
  button: {
    '&::-moz-focus-inner': {
      border: 0,
      outline: 0,
      outlineOffset: 0,
      padding: 0,
    },
    '&:active': {
      outline: 0,
    },
    '&:focus': {
      outline: 0,
    },
    MozOsxFontSmoothing: 'grayscale',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    appearance: 'none',
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    font: '$default',
    fontFamily: 'inherit',
    margin: 0,
    outline: 'none',
    overflow: 'visible',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 'auto',
  },
  html: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontSize: '62.5%',
    lineHeight: '1.5',
    textRendering: 'optimizeLegibility',
  },
  svg: {
    verticalAlign: 'middle',
  },
});

export default ProviderStyled;
