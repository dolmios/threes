import { breakpoints, styled } from '../stitches.config';

export const BadgeStyled = styled('div', {
  alignItems: 'center',
  borderRadius: '$2',
  display: 'inline-flex',
  fontSize: '$h6',
  fontWeight: 500,
  justifyContent: 'center',
  padding: '$1 $3',
  variants: {
    theme: {
      blue: {
        background: '$blueOverlay',
        color: '$blueText',
      },
      default: {
        background: '$overlayActive',
        color: '$text',
      },
      green: {
        background: '$greenOverlay',
        color: '$greenText',
      },
      orange: {
        background: '$orangeOverlay',
        color: '$orangeText',
      },
      pink: {
        background: '$pinkOverlay',
        color: '$pinkText',
      },
      purple: {
        background: '$purpleOverlay',
        color: '$purpleText',
      },
      red: {
        background: '$redOverlay',
        color: '$redText',
      },
    },
  },

  [breakpoints.phone]: {
    fontSize: '$p',
  },

  verticalAlign: 'middle',
});

export const BadgeIconStyled = styled('span', {
  display: 'inline-flex',
  paddingRight: '$2',
  svg: {
    alignSelf: 'center',

    height: '1.7rem',
    marginTop: '-0.1rem',
    width: '1.7rem',
  },

  verticalAlign: 'middle',
});

export default BadgeStyled;
