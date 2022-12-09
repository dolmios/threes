import { styled } from '../stitches.config';

export const ImageStyled = styled('div', {
  height: '100%',
  position: 'relative',
  transition: '$default',
  variants: {
    borderRadius: {
      1: {
        borderRadius: '$1',
        img: {
          borderRadius: '$1',
        },
      },
      2: {
        borderRadius: '$2',
        img: {
          borderRadius: '$2',
        },
      },
      3: {
        borderRadius: '$3',
        img: {
          borderRadius: '$3',
        },
      },
    },
    hover: {
      false: {
        '&:hover': {
          opacity: 1,
        },
      },
      true: {
        '&:hover': {
          opacity: 0.7,
        },
      },
    },
  },

  width: '100%',
});

export default ImageStyled;
