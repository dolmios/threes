import { styled } from '../stitches.config';

export const InputStyled = styled('div', {
  '&:focus-within': {
    background: '$overlayHover',
  },
  '&:hover': {
    background: '$overlayHover',
  },
  '*': {
    verticalAlign: 'middle',
  },
  alignContent: 'center',
  alignSelf: 'center',
  background: '$overlay',
  borderRadius: '$2',
  display: 'inline-flex',
  justifyContent: 'center',
  padding: '$2 $3',
  position: 'relative',
  transition: '$default',
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
    },
    state: {
      default: {
        border: '0.1rem solid $border',
      },
      error: {
        border: '0.2rem solid $redOverlay',
      },
      success: {
        border: '0.2rem solid $greenOverlay',
      },
      warning: {
        border: '0.2rem solid $orangeOverlay',
      },
    },
  },

  width: '100%',
});

export const InputAreaStyled = styled('input', {
  '&:focus': {
    outline: 'none',
  },
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$text',
  fontSize: '1.6rem !important',
  margin: '0',
  outline: 'none',
  padding: '0',
  textAlign: 'left',
  transition: '$default',
  width: '100%',
});

export const InputFunctionStyled = styled('div', {
  button: {
    ft: '1.4rem',
    lineHeight: '$1',
    marginLeft: '$2',
    paddingBottom: '$1',
    paddingLeft: '$3',
    paddingRight: '$3',
    paddingTop: '$1',
  },
  display: 'inline-flex',
  height: '100%',
  marginLeft: '$3',
  position: 'relative',
  svg: {
    height: '1.85rem',
    width: 'auto',
  },

  verticalAlign: 'middle',
  width: 'auto',
});

export default InputStyled;
