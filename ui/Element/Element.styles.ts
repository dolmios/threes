import { styled } from '../stitches.config';

export const ElementStyled = styled('div', {
  marginBlockEnd: 0,
  marginBlockStart: 0,

  variants: {
    flexduo: {
      true: {
        '*': {
          alignSelf: 'center',
          margin: '0 !important',
          verticalAlign: 'middle',
        },
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        verticalAlign: 'middle',
      },
    },
  },
});

export default ElementStyled;
