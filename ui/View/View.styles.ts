import { breakpoints, styled } from '../stitches.config';

export const ViewStyled = styled('div', {
  paddingLeft: '$2',
  paddingRight: '$2',

  variants: {
    container: {
      false: {
        minWidth: '100%',
      },
      true: {
        margin: 'auto',

        [breakpoints.phone]: {
          width: '98%',
        },
        [breakpoints.tabletX]: {
          width: '98%',
        },
        [breakpoints.laptopX]: {
          maxWidth: '1400px',
          width: '97%',
        },
        [breakpoints.desktopX]: {
          maxWidth: '1600px',
          width: '96%',
        },
        [breakpoints.wide]: {
          maxWidth: '1850px',
          width: '95%',
        },
      },
    },
  },

  width: '100%',
});

export default ViewStyled;
