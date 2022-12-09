import { styled } from '../stitches.config';

export const DividerStyled = styled('div', {
  margin: '0 auto',
  variants: {
    theme: {
      blue: {
        border: '0.1rem solid $blue',
      },
      default: {
        border: '0.1rem solid $overlayActive',
      },
      orange: {
        border: '0.1rem solid $orange',
      },
      pink: {
        border: '0.1rem solid $pink',
      },
      purple: {
        border: '0.1rem solid $purple',
      },
      red: {
        border: '0.1rem solid $red',
      },
    },
  },
  width: '100%',
});

export default DividerStyled;
