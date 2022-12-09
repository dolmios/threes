import { fadeIn, fadeOut, styled } from '../stitches.config';

export const PopoverStyled = styled('div', {
  position: 'relative',
  width: 'auto',
});

export const PopoverTriggerStyled = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  width: 'auto',
});

export const PopoverContentStyled = styled('div', {
  background: '$background',
  borderRadius: '$2',
  fontSize: '1.5rem',
  lineBreak: 'auto',
  overflowY: 'auto',
  position: 'absolute',
  top: '120%',
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .4s`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .4s`,
        animationFillMode: 'forwards',
      },
    },
  },
  width: 'auto',
  zIndex: '$popover',
});

export default PopoverStyled;
