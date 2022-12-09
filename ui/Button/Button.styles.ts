import { breakpoints, styled } from '../stitches.config';

export const ButtonStyled = styled('button', {
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  '&:hover': {
    backgroundColor: '$overlayHover',
    color: '$text',
  },
  alignContent: 'center',
  alignItems: 'center',
  border: '0.1rem solid $overlay',
  borderRadius: '$1',
  fontSize: '$h6',
  fontWeight: 500,
  padding: '$2 $3',
  svg: {
    alignSelf: 'center',

    height: '1.9rem',
    marginTop: '-0.1rem',
    width: '1.9rem',
  },

  [breakpoints.phone]: {
    fontSize: '$p',
  },

  transition: '$default',

  variants: {
    block: {
      false: {
        display: 'inline-block',
      },
      true: {
        display: 'block',
        width: '100%',
      },
    },

    solid: {
      false: {
        background: '$overlayActive',
        color: '$text',
      },
      true: {
        background: '$text',
        color: '$background',
      },
    },
  },

  verticalAlign: 'middle',
});

export const ButtonIconStyled = styled('span', {
  display: 'inline-flex',
  marginRight: '$3',

  verticalAlign: 'middle',
});

export default ButtonStyled;
