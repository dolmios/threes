import { breakpoints, fadeIn, fadeOut, styled } from '../stitches.config';

export const DialogStyled = styled('div', {
  display: 'inline-flex',
  position: 'relative',
});

export const DialogTriggerStyled = styled('div', {
  display: 'inline-flex',
  position: 'relative',
});

export const DialogOverlayStyled = styled('div', {
  background: 'rgba(0,0,0,0.5)',
  bottom: 0,
  left: 0,
  overflowY: 'scroll',
  position: 'fixed',
  right: 0,
  top: 0,
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .3s ease-in-out`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .1s ease-in-out`,
        animationFillMode: 'forwards',
      },
    },
  },
  width: '100%',
  zIndex: '$dialog',
});

export const DialogContentStyled = styled('div', {
  background: '$background',
  borderRadius: '$3',
  left: '50%',
  maxHeight: '80vh',
  overflowY: 'auto',
  position: 'fixed',
  textAlign: 'left',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .4s ease-in-out`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .4s ease-in-out`,
        animationFillMode: 'forwards',
      },
    },
  },

  width: '70rem',

  [breakpoints.phone]: {
    maxHeight: '95vh',
    maxWidth: '90%',
    width: '90%',
  },
});

export const DialogExitStyled = styled('div', {
  cursor: 'pointer',
  padding: '1rem',
  position: 'absolute',
  right: 0,
  top: 0,
  transition: '$default',
});

export default DialogStyled;
