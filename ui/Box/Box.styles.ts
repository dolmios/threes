import { styled } from '../stitches.config';

export const paddingVariants = {
  padding: {
    default: {
      padding: '$4 $5',
    },
    none: {
      padding: 0,
    },
  },
};
export const BoxStyled = styled('div', {
  background: '$overlay',
  border: '0.1rem solid transparent',
  borderRadius: '$3',
  display: 'block',
  height: '100%',
  margin: 0,
  paddingBlock: 0,
  position: 'relative',
  transition: '$default',

  variants: {
    hover: {
      true: {
        '&:hover': {
          background: '$overlayHover',
        },
      },
    },
    loading: {
      true: {
        opacity: 0.5,
      },
    },
    micro: {
      true: {
        background: '$background',
        borderRadius: '$2',
        borderWidth: '0.2rem',
        padding: '0 $3',
      },
    },
    theme: {
      default: {
        borderColor: '$border',
      },
      error: {
        background: '$orangeOverlay',
        borderColor: '$orangeBorder',
        color: '$orangeText',
      },
      success: {
        background: '$greenOverlay',
        borderColor: '$greenBorder',
        color: '$greenText',
      },
    },
    ...paddingVariants,
  },

  width: 'auto',
});

export const BoxImageChildrenStyled = styled('div', {
  variants: {
    ...paddingVariants,
  },
});

export default BoxStyled;
