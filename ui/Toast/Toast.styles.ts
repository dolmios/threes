import { fadeIn, fadeOut, styled } from '../stitches.config';

export const ToastStyled = styled('div', {
  background: '$background',
  borderRadius: '$2',
  boxShadow: '0 0.5rem 0.25rem rgba(0, 0, 0, 0.05)',
  cursor: 'pointer',
  fontSize: '1.6rem',
  fontWeight: 500,
  height: 'auto',
  lineHeight: '2',
  marginTop: '$3',
  overflow: 'hidden',
  position: 'relative',
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .3s`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .4s`,
        animationFillMode: 'forwards',
      },
    },
  },
  width: '100%',
});

export const ToastContainerStyled = styled('div', {
  bottom: '$3',
  position: 'fixed',
  right: '$3',
  zIndex: '$toast',
});

export default ToastStyled;
